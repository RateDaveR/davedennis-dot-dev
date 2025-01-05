const url = "https://api.dev.davedennis.dev/createpost";
    const headers = {
    "Content-Type": "application/json",
    "Authorization": "auth1234!",
};

const previousPosts = [
    {
        pk: "post-2",
        sk: "user-123",
        title: "Deploying a GO CLI to npm",
        contentSummary: "content summary",
        contentUrl: "content url",
        category: "tech",
        status: "draft",
        publishDate: "2024-08-08",
        readtime: 15,
    },
];

const responses = await Promise.all(
    previousPosts.map(async (post) => {
        const body = JSON.stringify(post);
        console.log(`Sending post: ${body} to ${url}`);

        const response = await fetch(url, {
            method: "POST",
            headers,
            body,
        });

        if (!response.ok) {
            throw new Error(`Failed to send post: ${response.statusText}`);
        }

        const json = await response.json();
        console.log(`Response for ${post.pk}: ${JSON.stringify(json)}`);
        return json;
    })
);

console.log("All posts processed successfully:", responses);


