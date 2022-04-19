import axios from 'axios'
const URL = 'https://api.henritrip.fr/api/v1/road_trips/13'
const URL_TOURISTIC_SITE = `https://api.henritrip.fr/api/v1/touristic_sites/`
export const getPlacesData = async () => {
    try {
        const result = await axios.get(URL)
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const roadTripActivities = async () => {
    try {
        const result = await axios.get(URL_TOURISTIC_SITE)
        return result.data.touristic_sites
    } catch (error) {
        console.log(error);
    }
}