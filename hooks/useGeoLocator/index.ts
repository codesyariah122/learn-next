import { useQuery } from "@tanstack/react-query";

const geoApi = "https://api.ipgeolocation.io/ipgeo";
const geoApiKey = "267b1cdc2a264807b030ea587e61f8b4";

const fetchYourLocation = async () => {
  const endPoint = `${geoApi}?apiKey=${geoApiKey}`;
  const parsed = await fetch(endPoint, {
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

/**
 * Docs: https://tanstack.com/query/v4/docs
 * @returns Object
 */

const useGeoLocator = () => {
  return useQuery({
    queryKey: ["geoLocation"],
    queryFn: async () => fetchYourLocation(),
  });
};

export { useGeoLocator };
