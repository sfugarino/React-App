import yelpApi from "./yelpApi";

export const getTopParlors = async () => {
  let response = await yelpApi.get("/businesses/search", {
    params: {
      limit: 5,
      term: "food",
      location: "Alpharetta, GA",
      categories: "icecream,All",
      sort_by: "rating"
    }
  });

  if (response.status === 200) {
    let parlors = await response.data.businesses;
    if (typeof parlors !== "undefined") {
      await asyncForEach(parlors, async parlor => {
        let reviews = await getParlorReviews(parlor.id);
        if (typeof reviews !== "undefined" && reviews.length > 0) {
          parlor.review = reviews[0];
        }
      });

      return parlors;
    }
  }

  throw new Error(response.status);
};

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export async function getParlorDetails(id) {
  let response = await yelpApi.get("/businesses/" + id);

  if (response.status === 200) {
    let parlor = await response.data;
    let reviews = await getParlorReviews(id);
    parlor.reviews = reviews;
    return parlor;
  }

  throw new Error(response.status);
}

export async function getParlorReviews(id) {
  let response = await yelpApi.get("/businesses/" + id + "/reviews");

  if (response.status === 200) {
    let json = await response.data.reviews;
    return json;
  }

  throw new Error(response.status);
}
