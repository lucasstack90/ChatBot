# 🤖 Chatbot de Vendas para WhatsApp

Chatbot desenvolvido em JavaScript utilizando Node.js e a biblioteca `whatsapp-web.js`.

O projeto foi criado com foco em automação de atendimento no WhatsApp, permitindo recepcionar clientes automaticamente, identificar necessidades e manter o interesse até que o atendimento humano seja assumido.

---

# 🚀 Funcionalidades

- ✅ Atendimento automático no WhatsApp
- ✅ Fluxo de conversa inteligente
- ✅ Identificação do cliente
- ✅ Menu interativo
- ✅ Coleta de informações
- ✅ Memória temporária de conversa
- ✅ Atendimento humanizado
- ✅ Organização de atendimento
- ✅ Respostas automáticas
- ✅ QR Code para autenticação

---

# 🛠️ Tecnologias Utilizadas

- JavaScript
- Node.js
- whatsapp-web.js
- Puppeteer
- qrcode-terminal

---

# 📦 Instalação do Projeto

## 1️⃣ Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2️⃣ Entre na pasta do projeto

```bash
cd whatsapp-bot
```

---

## 3️⃣ Instale o Node.js

Baixe o Node.js no site oficial:

```text
https://nodejs.org/pt-br
```

Instale a versão **LTS**.

---

## 4️⃣ Verifique se a instalação funcionou

```bash
node -v
```

```bash
npm -v
```

---

## 5️⃣ Instale as dependências do projeto

```bash
npm install
```

Ou instale manualmente:

```bash
npm install whatsapp-web.js qrcode-terminal puppeteer
```

---

## 6️⃣ Execute o chatbot

```bash
node script.js
```

---

# 📱 Como conectar no WhatsApp

Após executar o projeto:

1. O QR Code aparecerá no terminal;
2. Abra o WhatsApp no celular;
3. Vá em:

```text
Aparelhos conectados
```

4. Depois:

```text
Conectar aparelho
```

5. Escaneie o QR Code.

---

# ✅ Projeto funcionando

Se tudo estiver correto, aparecerá:

```bash
🤖 Chatbot profissional conectado!
```

---

# ⚠️ Problema no PowerShell (Windows)

Caso o NPM seja bloqueado:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Depois pressione:

```text
S
```

E reinicie o VS Code.

---

# ▶️ Executar novamente

Sempre que quiser iniciar o bot:

```bash
node script.js
```
