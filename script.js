const qrcode = require('qrcode-terminal');

const {
    Client,
    LocalAuth
} = require('whatsapp-web.js');

// Inicialização do cliente
const client = new Client({

    authStrategy: new LocalAuth(),

    puppeteer: {
        headless: true,
        args: ['--no-sandbox']
    }
});

// Armazenamento temporário das conversas
const clientes = {};

// QR Code
client.on('qr', (qr) => {

    console.log('📱 Escaneie o QR Code:\n');

    qrcode.generate(qr, {
        small: true
    });
});

// Bot pronto
client.on('ready', () => {

    console.log('🤖 Chatbot profissional conectado!');
});

// Conversas
client.on('message_create', async (message) => {

    // Ignora mensagens do próprio bot
    if (message.fromMe) return;

    const numero = message.from;
    const msg = message.body.toLowerCase();

    // Cria cliente caso não exista
    if (!clientes[numero]) {

        clientes[numero] = {
            etapa: 'inicio',
            nome: '',
            interesse: '',
            produto: ''
        };
    }

    const cliente = clientes[numero];

    // =========================
    // INÍCIO
    // =========================

    if (
        msg === 'oi' ||
        msg === 'olá' ||
        msg === 'ola' ||
        msg === 'bom dia' ||
        msg === 'boa tarde' ||
        msg === 'boa noite'
    ) {

        cliente.etapa = 'nome';

        return message.reply(
`Olá 👋

Seja muito bem-vindo(a)!

No momento estou em atendimento, mas vou continuar sua conversa assim que possível 😊

Antes de começarmos, qual é o seu nome?`
        );
    }

    // =========================
    // NOME
    // =========================

    if (cliente.etapa === 'nome') {

        cliente.nome = message.body;

        cliente.etapa = 'menu';

        return message.reply(
`Prazer, ${cliente.nome} 😊

Como posso ajudar você hoje?

1️⃣ Produtos
2️⃣ Valores
3️⃣ Orçamento
4️⃣ Falar com vendedor`
        );
    }

    // =========================
    // MENU
    // =========================

    if (cliente.etapa === 'menu') {

        // Produtos
        if (msg === '1') {

            cliente.interesse = 'Produtos';
            cliente.etapa = 'produto';

            return message.reply(
`🛍️ Perfeito!

Qual produto você procura?`
            );
        }

        // Valores
        else if (msg === '2') {

            cliente.interesse = 'Valores';
            cliente.etapa = 'produto';

            return message.reply(
`💰 Claro!

Qual produto deseja consultar?`
            );
        }

        // Orçamento
        else if (msg === '3') {

            cliente.interesse = 'Orçamento';
            cliente.etapa = 'orcamento';

            return message.reply(
`📋 Perfeito!

Envie as seguintes informações:

✅ Produto
✅ Quantidade
✅ Cidade/Estado`
            );
        }

        // Vendedor
        else if (msg === '4') {

            cliente.interesse = 'Falar com vendedor';
            cliente.etapa = 'aguardando';

            return message.reply(
`👨‍💼 Perfeito!

Assim que eu finalizar o atendimento atual, assumirei sua conversa 😊`
            );
        }

        else {

            return message.reply(
`❌ Opção inválida.

Digite:

1️⃣ Produtos
2️⃣ Valores
3️⃣ Orçamento
4️⃣ Falar com vendedor`
            );
        }
    }

    // =========================
    // PRODUTO
    // =========================

    if (cliente.etapa === 'produto') {

        cliente.produto = message.body;

        cliente.etapa = 'aguardando';

        return message.reply(
`🔥 Excelente escolha!

Recebi o produto: *${cliente.produto}*

Vou verificar as informações e continuar seu atendimento assim que possível 😊`
        );
    }

    // =========================
    // ORÇAMENTO
    // =========================

    if (cliente.etapa === 'orcamento') {

        cliente.produto = message.body;

        cliente.etapa = 'aguardando';

        return message.reply(
`📋 Perfeito, ${cliente.nome}!

Recebi suas informações ✅

Vou preparar tudo e continuar seu atendimento em breve 😊`
        );
    }

    // =========================
    // AGUARDANDO
    // =========================

    if (cliente.etapa === 'aguardando') {

        return message.reply(
`🤖 Sua mensagem foi recebida 😊

Assim que possível continuarei seu atendimento pessoalmente.`
        );
    }
});

// Inicialização
client.initialize();