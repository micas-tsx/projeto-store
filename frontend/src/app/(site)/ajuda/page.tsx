import Link from "next/link";

export default function AjudaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Central de Ajuda - B7Store
      </h1>

      {/* Como Cancelo Meu Pedido */}
      <section className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Como eu cancelo meu pedido?
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Você pode cancelar seu pedido facilmente através da nossa plataforma, 
            desde que ele ainda esteja com o status <strong>pendente</strong> (aguardando pagamento).
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="font-semibold text-blue-900 mb-2">Passo a passo:</p>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>Acesse a página <Link href="/my-orders" className="underline hover:text-blue-600">Meus Pedidos</Link></li>
              <li>Encontre o pedido que deseja cancelar</li>
              <li>Clique no botão <strong>"Cancelar Pedido"</strong></li>
              <li>Confirme o cancelamento</li>
            </ol>
          </div>

          <p className="font-semibold text-gray-900 mt-6 mb-2">
            ⚠️ Importante:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Somente pedidos com status <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">Pendente</span> podem ser cancelados
            </li>
            <li>
              Pedidos já <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Pagos</span> não podem ser cancelados pelo sistema
            </li>
            <li>
              Para pedidos pagos, entre em contato com nosso suporte
            </li>
          </ul>
        </div>
      </section>

      {/* O que é a B7Store */}
      <section className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          O que é a B7Store?
        </h2>
        <p className="text-gray-700 mb-4">
          A B7Store é uma plataforma de e-commerce para compras de produtos únicos. 
          Cada compra é uma transação individual - você compra o produto uma vez e ele é seu!
        </p>
        <p className="text-gray-700">
          <strong>Não trabalhamos com planos ou assinaturas recorrentes.</strong> Todos os 
          nossos produtos são vendidos por compra única, sem cobranças mensais ou anuais.
        </p>
      </section>

      {/* Status dos Pedidos */}
      <section className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Status dos Pedidos
        </h2>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              Pendente
            </span>
            <p>Pedido criado, aguardando confirmação de pagamento. Pode ser cancelado.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              Pago
            </span>
            <p>Pagamento confirmado. Pedido em processamento para envio.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              Cancelado
            </span>
            <p>Pedido cancelado por você ou pelo sistema.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              Expirado
            </span>
            <p>O prazo para pagamento expirou. Faça um novo pedido se desejar.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              Falhou
            </span>
            <p>Houve um problema com o pagamento. Tente novamente.</p>
          </div>
        </div>
      </section>

      {/* Política de Devolução */}
      <section className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Política de Devolução
        </h2>
        <p className="text-gray-700 mb-4">
          Para pedidos já pagos e recebidos, você pode solicitar devolução em até 7 dias 
          após o recebimento, desde que o produto esteja em perfeitas condições.
        </p>
        <p className="text-gray-700">
          Entre em contato com nosso suporte para iniciar o processo de devolução.
        </p>
      </section>

      {/* Precisa de mais ajuda */}
      <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Precisa de mais ajuda?
        </h2>
        <p className="text-gray-700 mb-4">
          Nossa equipe de suporte está pronta para ajudar você!
        </p>
        <div className="space-y-2 text-gray-700">
          <p>
            📧 Email: <a href="mailto:suporte@b7store.com" className="text-blue-600 hover:underline">suporte@b7store.com</a>
          </p>
          <p>
            📱 WhatsApp: <a href="https://wa.me/5561994060294" className="text-blue-600 hover:underline">(61) 9406-0294</a>
          </p>
        </div>
      </section>

      {/* Back to Home */}
      <div className="mt-8 text-center">
        <Link 
          href="/" 
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Voltar para a Loja
        </Link>
      </div>
    </div>
  );
}
