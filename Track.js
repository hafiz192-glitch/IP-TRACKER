fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    const logData = `IP: ${data.ip}, City: ${data.city}, Country: ${data.country_name}, ISP: ${data.org}, Time: ${new Date().toLocaleString()}\n`;

    fetch("https://api.github.com/repos/HAFIZ192-GLITCH/ip-tracker/contents/logs.txt", {
      method: "PUT",
      headers: {
        "Authorization": "token YOUR_GITHUB_PERSONAL_ACCESS_TOKEN",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Update logs",
        content: btoa(logData),
        sha: "LAST_FILE_SHA"
      })
    });
  });
