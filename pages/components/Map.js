import {useEffect} from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
'pk.eyJ1Ijoia2FuZGVrd2UiLCJhIjoiY2t5cG5mYzRuMGJoOTJvbW1vN2Q5MnNwciJ9.--a7EhJILhZ-LRgtjWTloQ';

const Map = () => {

    useEffect(() => {
    
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [29.8635,-1.9851],
        zoom: 7.30,
        });
        });

        // var map = new mapboxgl.Map({
  //   container: 'YOUR_CONTAINER_ELEMENT_ID',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3',
  //  center: [30.0513, -1.9350],
  //   zoom:,
  //   });
  return <Wrapper id='map'></Wrapper>;
};



export default Map;


const Wrapper=tw.div`
flex-1
`


