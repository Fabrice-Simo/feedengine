<template>
  <div class="test">
    <h1 style="color: gray">{{ msg }}</h1>
    <div class="fe-container">
      <!-- album list -->
      <fe-list type="album" size="large" :itemList="albumList">
        <template #button>
          <fe-button @mbOnClick="addAlbum">add album</fe-button>
        </template>
        <template #info="{ item }">
          <div class="fe-list-item__info">{{ item.photoCount }}</div>
        </template>
      </fe-list>
      <!-- photo list -->
      <fe-list type="photo" size="small" :itemList="photoList">
        <template #button>
          <fe-button @mbOnClick="addPhoto">add photo</fe-button>
        </template>
      </fe-list>
    </div>
  </div>
</template>

<script>
import { jsPlumb } from "jsplumb";
import * as mockData from "@/mockData";
import { jspCommonConfig, jspSourceConfig, jspTargetConfig } from "@/config";

import Button from "@/components/Button";
import List from "@/components/List";

let jspInstance, domElement;

export default {
  name: "FeedEngine",
  components: {
    "fe-button": Button,
    "fe-list": List,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      jsPlumb: null,
      albumList: mockData.albumList,
      photoList: mockData.photoList,
      connectionList: mockData.connectionList,
    };
  },
  mounted() {
    this.jsPlumb = jsPlumb.getInstance(jspCommonConfig);
    this.jsPlumb.batch(() => {
      this.initSourceNodes();
      this.initTargetNodes();
      this.drawConnections();
    });
    this.updateAlbumPhotoCount();
  },
  methods: {
    initSourceNodes() {
      let photoList = this.photoList;
      for (let i = 0; i < photoList.length; i++) {
        this.domElementToSource(photoList[i].uuid);
      }
    },

    domElementToSource(uuid) {
      domElement = document.getElementById(uuid);
      this.jsPlumb.makeSource(domElement, jspSourceConfig);
    },

    initTargetNodes() {
      let albumList = this.albumList;
      for (let i = 0; i < albumList.length; i++) {
        this.domElementToTarget(albumList[i].uuid);
      }
    },

    domElementToTarget(uuid) {
      domElement = document.getElementById(uuid);
      this.jsPlumb.makeTarget(domElement, jspTargetConfig);
    },

    drawConnections() {
      jspInstance = this.jsPlumb;
      jspInstance.ready(() => {
        this.connectAllNodes(jspInstance);
        this.onConnection();
      });
    },

    connectAllNodes(jspInstance) {
      for (let i = 0; i < this.connectionList.length; i++) {
        let nodeRelation = this.connectionList[i];
        this.connectNodePair(jspInstance, nodeRelation);
      }
    },

    connectNodePair(jspInstance, nodeRelation) {
      jspInstance.connect({
        source: nodeRelation.sourceUiid,
        target: nodeRelation.targetUiid,
        reattach: true, // reattach the connector when it is dragged and dropped in space
      });
    },

    onConnection() {
      this.jsPlumb.bind("connection", (clsConnection) => {
        console.log(
          "dragDropConn.vue > methods > onConnection\n",
          clsConnection
        );

        let discTargetUiid = clsConnection.connection.suspendedElementId;

        if (this.isTarget(discTargetUiid)) {
          this.removeConnection({
            sourceUiid: clsConnection.sourceId,
            targetUiid: discTargetUiid,
          });
        }

        this.addConnection({
          sourceUiid: clsConnection.sourceId,
          targetUiid: clsConnection.targetId,
        });

        this.updateAlbumPhotoCount();

        console.table(this.connectionList);
      });
    },

    isTarget(uuid) {
      if (!uuid) {
        return false;
      }
      return true;
    },

    addConnection(objConn) {
      this.connectionList.push(objConn);
    },

    removeConnection(objConn) {
      console.log("dragDropConn.vue > methods > onConnection\n", objConn);
      this.connectionList.splice(this.findNodePairIndex(objConn), 1);
    },

    findNodePairIndex(objConn) {
      return this.connectionList.findIndex((el) => {
        if (
          el.sourceUiid === objConn.sourceUiid &&
          el.targetUiid === objConn.targetUiid
        ) {
          return true;
        }
      });
    },

    updateAlbumPhotoCount() {
      for (let i = 0; i < this.albumList.length; i++) {
        this.albumList[i].photoCount = this.countPhoto(this.albumList[i]);
      }
      console.table("dragDropConn.vue > methods > updateAlbumPhotoCount\n");
      console.table(this.albumList);
    },

    countPhoto(album) {
      return this.connectionList.reduce((acc, conn) => {
        if (album.uuid === conn.targetUiid) {
          return acc + 1;
        }

        return acc;
      }, 0);
    },
  },
};
</script>


<style scoped>
@import url("@/styleGuide/index.css");
.fe-container {
  position: relative;

  margin: 0 auto;
  padding: var(--fe-small-spacing);
  border-radius: var(--fe-medium-spacing);
  color: var(--fe-accent);
  width: var(--fe-half-width);
  min-height: calc(var(--fe-large-fix-spacing) * 6);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: var(--fe-primary);
  opacity: 1;
  background-image: radial-gradient(
    var(--fe-primary-ligth) 0.45px,
    var(--fe-primary) 0.45px
  );
  background-size: 9px 9px;

  display: grid;
  grid-template-areas: "fe-album-list fe-album-list . . . . fe-photo-list  fe-photo-list";
}

.fe-list-item__info {
  min-width: var(--fe-large-fix-spacing);
  max-height: var(--fe-large-fix-spacing);
  border-radius: var(--fe-large-fix-spacing);
  color: var(--fe-action-text);
  background-color: var(--fe-secondary-dark);
  line-height: var(--fe-large-fix-spacing);
}
</style>
