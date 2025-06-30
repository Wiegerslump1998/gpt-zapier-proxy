{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
export default async function handler(req, res) \{\
  const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/23187895/ubw7nru/';\
  try \{\
    const response = await fetch(zapierWebhookUrl, \{\
      method: 'POST',\
      headers: \{ 'Content-Type': 'application/json' \},\
      body: JSON.stringify(req.body),\
    \});\
    if (!response.ok) \{\
      const text = await response.text();\
      console.error('Zapier error:', text);\
      return res.status(500).json(\{ status: 'error', details: text \});\
    \}\
    console.log('Forwarded to Zapier:', req.body);\
    res.status(200).json(\{ status: 'ok' \});\
  \} catch (err) \{\
    console.error(err);\
    res.status(500).json(\{ status: 'error', details: err.message \});\
  \}\
\}}