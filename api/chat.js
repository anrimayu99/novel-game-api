module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // デバッグ用：環境変数が読めているか確認
  const key = process.env.OPENAI_API_KEY;
  res.status(200).json({
    keyExists: !!key,
    keyPrefix: key ? key.substring(0, 7) : 'none'
  });
}
