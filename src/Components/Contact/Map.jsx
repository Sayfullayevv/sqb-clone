import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function FixedAddressMap() {
  const coords = [40.0844, 65.3792]; 
  const address = "Navoiy shahar";
  return (
    <div>
      <YMaps>
        <Map
          defaultState={{
            center: coords,
            zoom: 16,
          }}
          width="100%"
          height="400px"
        >
          <Placemark
            geometry={coords}
            properties={{
              balloonContent: address,
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default FixedAddressMap;