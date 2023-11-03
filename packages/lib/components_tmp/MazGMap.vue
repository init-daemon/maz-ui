<template>
  <div :id="mapContainerId" class="maz-map"></div>
</template>

<script lang="ts" setup>
  import { computed, onMounted, watch, type PropType } from 'vue'
  import { Map, type MapOptions, type MapMarker, type MapHTMLMarker } from './MazGMap/map-module/map'

  const props = defineProps({
    googleMapsApiKey: { type: String, required: true },
    language: { type: String, required: true },
    region: { type: String, required: true },
    /** should not be "google" */
    mapContainerId: { type: String, default: 'map-container' },
    center: {
      type: Object as PropType<MapOptions['center']>,
      required: true,
    },
    zoom: { type: Number, default: 14 },
    markers: {
      type: Array as PropType<MapMarker[] | MapHTMLMarker[]>,
      default: null,
    },
  })

  const mapOptions = computed<MapOptions>(() => {
    return {
      center: props.center,
      zoom: props.zoom,
      streetViewControl: false,
    }
  })

  const loadMap = async () => {
    const map = new Map(props.mapContainerId, props.googleMapsApiKey, mapOptions.value)
    await map.init({ language: props.language, region: props.region })

    watch(
      () => props.markers,
      async (markers) => {
        map.removeAllMarkers()

        if (!markers) return

        for await (const marker of markers) {
          const isHtmlMarker = 'templateHtml' in marker

          isHtmlMarker
            ? map.addHTMLMarker(marker as MapHTMLMarker)
            : map.addMarker(marker as MapMarker)
        }

        map.fitOnAllMarkers()
      },
      { immediate: true },
    )
  }

  onMounted(() => {
    loadMap()
  })
</script>
