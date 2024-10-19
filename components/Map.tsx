"use client"
import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {

    const initMap = async () => {

        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
          version: 'weekly'
        });

        const { Map } = await loader.importLibrary('maps');
        const { Marker } = await loader.importLibrary('marker');
        const position = {
          lat: 43.642693,
          long: -79.3871189
        }

        // map options
        const mapOptions = {
          center: position,
          zoom: 17,
          mapId: 'Deutchkleen Office Address'
        }

        // setup the map
        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

        // put up a marker

        const marker = new Marker({
          map: map,
          position: position
        })
    }
    initMap();
  }, []);
  return (
    <div className='w-full h-[400px] border border-blue-100 mt-8' ref={mapRef} />
  )
}

export default Map