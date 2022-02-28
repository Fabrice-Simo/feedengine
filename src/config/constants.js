/* numeric constants */
let baseNum = 4;
// flowChart connector
export const connectorCornerRadius = baseNum;
export const connectorStub = baseNum;
export const connectorStrokeWidth = baseNum / 2;
// connector endpoints
export const endpointRadius = baseNum;
export const endpointHoverRadius = baseNum * 3;
// connector arrow overlay
export const overlayLocation = baseNum / baseNum;
export const overlayWidth = baseNum * 3;
export const overlayLength = baseNum * 3;
// anchor
export const singleConnection = baseNum / baseNum;
export const infiniteConnection = -baseNum / baseNum;

/* boolean constants */
// connector
export const isReattached = false;
// anchor
export const isloopedBack = false;

/* string constants */
// anchor
export const sourceAnchorPos = "Left";
export const targetAnchorPos = "Continuous";

/* color constants */
// connector
export const connectorStrokeColor = "#556500";
export const connectorStrokeHoverColor = "#006688";
// endpoints
export const endpointFill = "transparent";
export const endpointHoverFill = "#006688";
// overlay
export const overlayStrokeColor = "#556500";
export const overlayFill = "#556500";
