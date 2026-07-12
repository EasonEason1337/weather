async function getRegions() {
  try {
    const response = await fetch("https://countries.dev/cities?country=NZ");
    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed:", error);
  }
}

getRegions();
