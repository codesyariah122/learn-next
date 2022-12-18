import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://islamic-api-collect.vercel.app/api/islamic/v1";
const tokenApi = "xaxbbczczaaxaa";

const fetchPrayerTime = async (props: any) => {
  try {
    const endPoint = `${baseUrl}/${tokenApi}/${props ? props.country : ""}/${
      props ? props.city : ""
    }/${props.time}`;
    const parsed = await fetch(endPoint, {
      method: "GET",
      next: {
        revalidate: 10,
      },
    });
    const result = parsed.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Docs: https://tanstack.com/query/v4/docs
 * @returns Object
 */

const usePrayerTime = (props: any) => {
  //   return useQuery({
  //     queryKey: ["prayerTime", props],
  //     queryFn: async () => fetchPrayerTime(props),
  //   });
  return useQuery(["prayerTime", props], () => fetchPrayerTime(props));
};

export { usePrayerTime };
