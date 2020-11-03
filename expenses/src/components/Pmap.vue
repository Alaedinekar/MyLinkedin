<template>
 

  <div style="height: 300px; width: 100%">
    
    
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      
      
    </l-map>
 
  </div>
</template>






<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, } from "vue2-leaflet";

export default {
  name: "Pmap",
  props:['pos'],
  components: {
    LMap,
    LTileLayer,
   
  },
  
  data() {
    return {
      zoom: 13,
      show: false,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
     
      
      currentZoom: 11.5,
      

      
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },

  mounted:async function(){
    await this.loca();
  },
  
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },

     loca: async function(){      
      var adr = this.pos;
      
      adr.replaceAll(' ', '%20');
      adr.replaceAll(',', '%2C');
      
      const key = "pk.2a042f7fb2119042d73b548892eac47e"
      var url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${adr}&limit=1&accept-language=fr&countrycodes=fr&format=json`
      fetch(url)
      .then(response =>  response.json())
      .then(res => {
       
       
        this.center = latLng(parseFloat(res[0].lat), parseFloat(res[0].lon));
        
      })
     
     this.show= true;

    
    
  }
   
  },
  
};
</script>
