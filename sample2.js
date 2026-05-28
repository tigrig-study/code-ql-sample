const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('name');

// 脆弱性：ユーザー入力をそのままHTMLとして出力している
document.getElementById('welcome-message').innerHTML = "Hello, " + username;

app.get('/', (req, res) => {
  const userComment = req.query.comment || '';
  res.send(`<html><body><h1>User comment: ${userComment}</h1></body></html>`);
});
