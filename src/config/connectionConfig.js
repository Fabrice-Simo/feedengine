import * as cst from "./constants";

/* common connection configuration */
export const jspCommonConfig = {
    // the DOM-id of the active area
    Container: "fe-container",
    // the type of the connector
    // Connector: [
    //   "Flowchart",
    //   {
    //     cornerRadius: cst.connectorCornerRadius,
    //     //alwaysRespectStubs: true,
    //     stub: cst.connectorStub,
    //   },
    // ],
    // the CSS style of the connector
    PaintStyle: {
        stroke: cst.connectorStrokeColor,
        strokeWidth: cst.connectorStrokeWidth,
    },
    // the CSS style of the connector on hover
    HoverPaintStyle: { stroke: cst.connectorStrokeHoverColor },
    // the CSS style of the connector endpoints
    EndpointStyle: {
        radius: cst.endpointHoverRadius,
        fill: cst.endpointFill,
    },
    // the CSS style of the connector endpoins on hover
    EndpointHoverStyle: {
        fill: cst.endpointHoverFill,
        radius: cst.endpointHoverRadius,
    },
    // The connector arrow
    ConnectionOverlays: [
        [
            "Arrow",
            {
                location: cst.overlayLocation,
                width: cst.overlayWidth,
                length: cst.overlayLength,
                paintStyle: {
                    stroke: cst.overlayStrokeColor,
                    fill: cst.overlayFill,
                },
            },
        ],
    ],
};

/* Source Node configuration */
export const jspSourceConfig = {
    anchor: cst.sourceAnchorPos,
    allowLoopback: cst.isloopedBack,
    maxConnections: cst.singleConnection,
};

/* Target Node configuration */
export const jspTargetConfig = {
    anchor: cst.targetAnchorPos,
    //anchor: ["Perimeter", { anchorCount: 200, shape: "Rectangle" }],
    allowLoopback: cst.isloopedBack,
    maxConnections: cst.infiniteConnection,
};
