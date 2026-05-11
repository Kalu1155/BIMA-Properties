const BASE_URL = "http://property.reworkstaging.name.ng/v1";

export async function apiRequest(
  endpoint,
  method = "GET",
  body = null
) {

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("adminToken")
      : null;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  };

  // BODY
  if (body) {
    options.body = JSON.stringify(body);
  }

  try {

    const response = await fetch(
      `${BASE_URL}${endpoint}`,
      options
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Something went wrong"
      );
    }

    return data;

  } catch (error) {

    throw error;

  }
}