import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FuZGVrd2UiLCJhIjoiY2t5cG5mYzRuMGJoOTJvbW1vN2Q5MnNwciJ9.--a7EhJILhZ-LRgtjWTloQ"

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [29.8635, -1.9851],
      zoom: 7.3,
    })
    addToMap(map)
  })

  const addToMap = (map) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([12.554729, 55.70651])
      .addTo(map)
  }
  return <Wrapper id="map"></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1
`
