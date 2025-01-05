const url = "https://api.dev.davedennis.dev/createpost";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "auth1234!",
};

const body = JSON.stringify({
  pk: "post-2",
  sk: "user-123",
  title: "Deploying a GO CLI to npm",
  contentSummary: "content summary",
  contentUrl: "content url",
  category: "tech",
  status: "draft",
  publishDate: "2024-08-08",
  readtime: 15,
});

const response = await fetch(url, {
      method: "POST",
  headers: headers,
  body: body,
});

console.log(`xxx ${response}`);
const json = await response.json();
