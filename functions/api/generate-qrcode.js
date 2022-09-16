import QRCode from 'qrcode'

export async function onRequestPost (context) {
  const { request } = context
  const rawBody = await request.text()

  const { url } = JSON.parse(rawBody)

  const qrCode = await QRCode.toString(url, {
    color: { light: '#fff', dark: '#093a87' },
    type: 'svg'
  })

  return new Response(JSON.stringify({ svg: qrCode }), { 'Content-Type': 'application/json' })
}
