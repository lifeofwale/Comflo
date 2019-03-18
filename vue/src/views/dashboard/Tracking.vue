<template>
  <main class="col-sm-12 ml-sm-auto col-md-11 dashboard-content" role="main">
    <div class="width-100 mt-lg-5 row">
      <div class="col-md-6">
        <h3>Raw Cashew Nuts</h3>
        <p class="text-gray">Transaction Tracker</p>
      </div>
      <div class="col-md-6 row">
        <div class="col-md-4">
          <div class="col-md-12">
            <div class="circle-green w30"></div>
          </div>
          <div class="col-md-12">
            <p class="text-gray text-center">Completed</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="col-md-12">
            <div class="circle w30"></div>
          </div>
          <div class="col-md-12">
            <p class="text-gray text-center">In Progress</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="col-md-12">
            <div class="circle-danger w30"></div>
          </div>
          <div class="col-md-12">
            <p class="text-gray text-center">Not Started</p>
          </div>
        </div>
      </div>

    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Delivered to seller’s warehouse</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Passed buyer’s Inspection</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">On trucks to port</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Passed Customs Clearance</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Loaded on Vessel</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Departed Locationation Port</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">In transit</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Arrived Destination Port</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Cleared Customs</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Loaded on trucks to warehouse</p>
            </div>
          </div>
          <div class="row mb-lg-3">
            <div class="col-md-2">
              <div class="circle-danger pull-left"></div>
            </div>
            <div class="col-md-8">
              <p class="text-gray tracker-position-text">Transaction Complete</p>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <gmap-map
            :center="center"
            :zoom="1"
            style="width: 100%; height: 500px"
            v-bind:options="mapStyle"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>
          <div class="row mt-lg-3">
            <!--<div class="col-md-4">-->
              <!--<h5 class="text-gray">Legend</h5>-->
              <!--&lt;!&ndash;<div class="col-md-1 block">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="circle-green w30"></div>&ndash;&gt;-->
                <!--&lt;!&ndash;<p class="text-success">Success</p>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="col-md-1 block">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="circle w30"></div>&ndash;&gt;-->
                <!--&lt;!&ndash;<p class="text-warning">Pending</p>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="col-md-1 block">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="circle-danger w30"></div>&ndash;&gt;-->
                <!--&lt;!&ndash;<p class="text-danger">Danger</p>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!---->
            <!--</div>-->
            <div class="col-md-8 text-right">
              <router-link to="/dashboard/">
                <a class="btn btn-round venice-bg text-white">
                  Back to Comflo
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
var mapStyles = [
  { 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#193341' }] },
  { 'featureType': 'landscape', 'elementType': 'geometry', 'stylers': [{ 'color': '#2c5a71' }] },
  { 'featureType': 'road', 'elementType': 'geometry', 'stylers': [{ 'color': '#29768a' }, { 'lightness': -37 }] },
  { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#0A6994' }] },
  { 'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{ 'color': '#0A6994' }] },
  { 'elementType': 'labels.text.stroke', 'stylers': [{ 'visibility': 'on' }, { 'color': '#3e606f' }, { 'weight': 2 }, { 'gamma': 0.82 }] },
  { 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#ffffff' }] },
  { 'featureType': 'administrative', 'elementType': 'geometry', 'stylers': [{ 'weight': 0.2 }, { 'color': '#1a3541' }] },
  { 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] },
  { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#2c5a71' }] }
]
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA9J5q8Pb7N6u80W-qt87znohiCVMZXRd8'
  }
})
export default {
  name: 'Tracking',
  data: function () {
    return {
      mapStyle: {styles: mapStyles},
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  }
}
</script>
