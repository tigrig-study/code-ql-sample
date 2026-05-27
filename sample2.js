const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('name');

// 脆弱性：ユーザー入力をそのままHTMLとして出力している
document.getElementById('welcome-message').innerHTML = "Hello, " + username;
