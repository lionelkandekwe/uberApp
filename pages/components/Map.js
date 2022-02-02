import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FuZGVrd2UiLCJhIjoiY2t5cG5mYzRuMGJoOTJvbW1vN2Q5MnNwciJ9.--a7EhJILhZ-LRgtjWTloQ"

const Map = (props) => {
  console.log(props)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [29.8635, -1.9851],
      zoom: 7.3,
    })

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 60,
      })
    }
  }, [props.dropoffCoordinates, props.pickupCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <Wrapper id="map"></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1
`
