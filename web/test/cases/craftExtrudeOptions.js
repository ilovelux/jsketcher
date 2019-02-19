import {assertFaceOrigination, assertFaceRole} from '../utils/asserts';
import {createPlaneAndOpenSketcher} from '../utils/scripts';

export const TEST_MODE = 'modellerUI';

export function testExtrudePrism(env, ui) {
  let sketcherUI = createPlaneAndOpenSketcher(ui);
  let sketchedFace = ui.context.services.selection.face.single;
  let [S1, S2, S3, S4] = sketcherUI.addPolygon(-100, -100, 100, 100);
  
  // let gauge = ui.prismSurfaceGauge([-100, -100, 0], [100, -100, 0], [50, 50, 0], [-50, 50, 0] );
  //
  // ui.__DEBUG__.AddParametricSurface(gauge.surface);
 
  ui.commitSketch();
  
  ui.selectFaces([0, 0, -10], [0, 0, 10]);
  
  ui.openWizard('EXTRUDE');
  ui.wizardContext.updateParam('value', 2000);
  ui.wizardContext.updateParam('prism', 0.1);
  ui.wizardOK();
  env.fail();
  env.done();
}
