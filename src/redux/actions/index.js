import axios from 'axios';

export function traerPeliculas() {
  return {
    type: 'GET_MOVIES',
    payload: axios.get('https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&user_id=22822863')
  };
}

export function traerInfo( id ) {
  return {
    type: 'GET_INFO',
    payload: axios.get(`https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type= web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS =9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${id}`)
  };
}
