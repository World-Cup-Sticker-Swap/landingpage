import { useEffect } from "react";

type Section = {
  title: string;
  body: React.ReactNode;
};

const lastUpdate = "8 de maio de 2026";

const sections: Section[] = [
  {
    title: "1. Quem somos",
    body: (
      <>
        <p>
          Esta Política de Privacidade descreve como tratamos os dados pessoais
          dos usuários do site <strong>Troca Figurinhas</strong> e do
          aplicativo móvel <strong>Troca Figurinhas</strong> (em conjunto,
          “Plataforma”).
        </p>
        <p>
          O controlador dos dados, nos termos da Lei Geral de Proteção de Dados
          (Lei nº 13.709/2018 – “LGPD”), é:
        </p>
        <ul>
          <li>
            <strong>Razão social:</strong> 35.974.878 PATRICIA ALMEIDA QUEIROZ
          </li>
          <li>
            <strong>CNPJ:</strong> 35.974.878/0001-02
          </li>
          <li>
            <strong>Sede:</strong> Salvador, Bahia – Brasil
          </li>
          <li>
            <strong>Contato (encarregado/DPO):</strong>{" "}
            <a
              href="mailto:contato@trocafigurinhascopa.com"
              className="text-brand-dark underline"
            >
              contato@trocafigurinhascopa.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Dados que coletamos",
    body: (
      <>
        <p>
          Coletamos apenas os dados necessários para operar a Plataforma e
          melhorar a experiência do usuário.
        </p>
        <p>
          <strong>2.1. No site (landing page):</strong>
        </p>
        <ul>
          <li>
            <strong>Dados que você fornece</strong> ao usar o formulário de
            contato: nome e e-mail.
          </li>
          <li>
            <strong>Dados coletados automaticamente:</strong> endereço IP,
            tipo e versão de navegador, sistema operacional, idioma, páginas
            visitadas e horário de acesso.
          </li>
          <li>
            <strong>Cookies e identificadores:</strong> utilizados para
            estatísticas de tráfego (Google Analytics) e para campanhas de
            marketing (pixels de plataformas como Meta/Instagram e TikTok).
          </li>
        </ul>
        <p>
          <strong>2.2. No aplicativo Troca Figurinhas:</strong>
        </p>
        <ul>
          <li>
            <strong>Dados de cadastro:</strong> nome, e-mail e senha (a senha
            é armazenada de forma criptografada).
          </li>
          <li>
            <strong>Localização aproximada:</strong> cidade/região, com sua
            permissão, usada exclusivamente para sugerir trocas próximas. Não
            coletamos coordenadas precisas em segundo plano.
          </li>
          <li>
            <strong>Conteúdo enviado por você:</strong> foto de perfil,
            imagens de figurinhas e informações da sua coleção.
          </li>
          <li>
            <strong>Dados de uso:</strong> matches realizados, mensagens
            trocadas dentro do app e interações com outros usuários.
          </li>
          <li>
            <strong>Dados de transação:</strong> quando você adquire uma
            assinatura premium ou faz uma compra dentro do app, os dados de
            pagamento são processados diretamente pela App Store (Apple) ou
            Google Play – não temos acesso ao número do cartão.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Para que usamos seus dados (finalidades)",
    body: (
      <ul>
        <li>Permitir o cadastro, login e uso da Plataforma.</li>
        <li>
          Encontrar trocas compatíveis e exibir matches relevantes para o
          usuário.
        </li>
        <li>
          Possibilitar a comunicação entre usuários para combinar trocas.
        </li>
        <li>
          Processar assinaturas e compras dentro do app, por meio das lojas
          oficiais (App Store/Google Play).
        </li>
        <li>
          Responder a contatos enviados pelo formulário e dar suporte ao
          usuário.
        </li>
        <li>
          Analisar o uso da Plataforma e melhorar funcionalidades, performance
          e segurança.
        </li>
        <li>
          Veicular comunicações e campanhas de marketing dos nossos próprios
          serviços.
        </li>
        <li>
          Cumprir obrigações legais, regulatórias e atender a autoridades
          competentes.
        </li>
      </ul>
    ),
  },
  {
    title: "4. Bases legais (LGPD, art. 7º e art. 11)",
    body: (
      <>
        <p>
          Tratamos seus dados pessoais com fundamento nas seguintes bases
          legais:
        </p>
        <ul>
          <li>
            <strong>Execução de contrato</strong>, para permitir o uso da
            Plataforma e a prestação dos serviços contratados.
          </li>
          <li>
            <strong>Consentimento</strong>, para envio de comunicações de
            marketing, uso de cookies não essenciais e acesso à localização.
          </li>
          <li>
            <strong>Legítimo interesse</strong>, para melhorar a experiência,
            prevenir fraudes e garantir a segurança da Plataforma.
          </li>
          <li>
            <strong>Cumprimento de obrigação legal ou regulatória</strong>,
            quando aplicável.
          </li>
        </ul>
        <p>
          Você pode revogar o consentimento a qualquer momento, sem prejuízo
          do tratamento já realizado.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies e tecnologias semelhantes",
    body: (
      <>
        <p>
          Utilizamos cookies e tecnologias similares para fazer o site
          funcionar, medir audiência e personalizar campanhas:
        </p>
        <ul>
          <li>
            <strong>Cookies essenciais:</strong> necessários para o
            funcionamento básico do site.
          </li>
          <li>
            <strong>Cookies de análise:</strong> Google Analytics, para
            entender o uso e melhorar a experiência.
          </li>
          <li>
            <strong>Cookies de marketing:</strong> pixels de redes sociais
            (Meta/Instagram, TikTok) para mensurar campanhas e exibir
            anúncios.
          </li>
        </ul>
        <p>
          Você pode bloquear cookies pelas configurações do seu navegador. Em
          alguns casos, isso pode afetar funcionalidades do site.
        </p>
      </>
    ),
  },
  {
    title: "6. Compartilhamento com terceiros",
    body: (
      <>
        <p>
          Não vendemos seus dados pessoais. Compartilhamos com prestadores de
          serviço estritamente necessários para operar a Plataforma:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> – hospedagem do site e logs de acesso.
          </li>
          <li>
            <strong>EmailJS</strong> – envio das mensagens do formulário de
            contato.
          </li>
          <li>
            <strong>Google (Firebase / Analytics)</strong> – autenticação,
            banco de dados, armazenamento de imagens e métricas de uso.
          </li>
          <li>
            <strong>Apple App Store e Google Play</strong> – processamento de
            assinaturas e compras dentro do app.
          </li>
          <li>
            <strong>Meta e TikTok</strong> – mensuração de campanhas
            publicitárias por meio de pixels.
          </li>
        </ul>
        <p>
          Também podemos compartilhar dados quando exigido por lei, ordem
          judicial ou autoridade competente, ou para proteger direitos,
          integridade e segurança dos usuários e da Plataforma.
        </p>
      </>
    ),
  },
  {
    title: "7. Transferência internacional de dados",
    body: (
      <p>
        Alguns dos prestadores acima estão localizados fora do Brasil
        (principalmente Estados Unidos e União Europeia). Ao usar a
        Plataforma, você reconhece que seus dados podem ser transferidos para
        outros países. Adotamos salvaguardas contratuais e técnicas para
        garantir nível de proteção adequado, conforme exigido pelo art. 33 da
        LGPD.
      </p>
    ),
  },
  {
    title: "8. Por quanto tempo guardamos seus dados",
    body: (
      <p>
        Mantemos seus dados pessoais pelo tempo necessário para cumprir as
        finalidades descritas nesta Política, em geral enquanto sua conta
        estiver ativa. Após a exclusão da conta, podemos reter dados por
        prazos adicionais para cumprir obrigações legais (por exemplo, art.
        27 do Código de Defesa do Consumidor) ou para o exercício regular de
        direitos em processos judiciais ou administrativos.
      </p>
    ),
  },
  {
    title: "9. Seus direitos como titular",
    body: (
      <>
        <p>
          Nos termos do art. 18 da LGPD, você pode, a qualquer momento,
          solicitar:
        </p>
        <ul>
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos seus dados pessoais;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            Anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desconformidade com a LGPD;
          </li>
          <li>Portabilidade dos dados a outro fornecedor;</li>
          <li>
            Eliminação dos dados tratados com base em consentimento;
          </li>
          <li>Informação sobre com quem compartilhamos seus dados;</li>
          <li>
            Informação sobre a possibilidade de não fornecer o consentimento e
            sobre as consequências da negativa;
          </li>
          <li>Revogação do consentimento.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, escreva para{" "}
          <a
            href="mailto:contato@trocafigurinhascopa.com"
            className="text-brand-dark underline"
          >
            contato@trocafigurinhascopa.com
          </a>
          . Responderemos no prazo previsto na LGPD.
        </p>
      </>
    ),
  },
  {
    title: "10. Segurança da informação",
    body: (
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger
        seus dados contra acessos não autorizados, perda, alteração ou
        destruição – como criptografia em trânsito (HTTPS), controle de
        acesso e monitoramento dos sistemas. Nenhum sistema é 100% seguro,
        mas trabalhamos continuamente para manter um nível de proteção
        adequado ao risco.
      </p>
    ),
  },
  {
    title: "11. Crianças e adolescentes",
    body: (
      <p>
        A Plataforma é destinada a usuários com idade igual ou superior a 13
        anos. Menores de 13 anos não devem se cadastrar. Para usuários entre
        13 e 18 anos, o cadastro deve ser feito com consentimento e sob
        supervisão dos pais ou responsáveis legais. Se você é responsável e
        identificou um cadastro irregular, entre em contato e excluiremos os
        dados.
      </p>
    ),
  },
  {
    title: "12. Alterações desta Política",
    body: (
      <p>
        Podemos atualizar esta Política periodicamente. Quando houver
        alteração relevante, avisaremos pelo site ou pelo app. A versão
        vigente é sempre a publicada nesta página, com a data da última
        atualização indicada no topo.
      </p>
    ),
  },
  {
    title: "13. Contato e encarregado de dados",
    body: (
      <>
        <p>
          Para dúvidas, solicitações de direitos ou denúncias relacionadas a
          dados pessoais:
        </p>
        <ul>
          <li>
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:contato@trocafigurinhascopa.com"
              className="text-brand-dark underline"
            >
              contato@trocafigurinhascopa.com
            </a>
          </li>
          <li>
            <strong>Endereço:</strong> Salvador, Bahia – Brasil
          </li>
        </ul>
        <p>
          Você também pode apresentar reclamação diretamente à Autoridade
          Nacional de Proteção de Dados (ANPD).
        </p>
      </>
    ),
  },
  {
    title: "14. Exclusão de conta e dados",
    body: (
      <>
        <p>
          Esta seção descreve como solicitar a exclusão da sua conta e dos
          seus dados no aplicativo <strong>Troca Figurinhas</strong>,
          desenvolvido por <strong>35.974.878 PATRICIA ALMEIDA QUEIROZ</strong>
          {" "}(CNPJ 35.974.878/0001-02).
        </p>

        <p>
          <strong>Como solicitar a exclusão</strong>
        </p>
        <ol className="my-2 list-decimal pl-6 [&_li]:my-1">
          <li>
            Envie um e-mail para{" "}
            <a
              href="mailto:contato@trocafigurinhascopa.com?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20conta%20%E2%80%93%20Troca%20Figurinhas"
              className="text-brand-dark underline"
            >
              contato@trocafigurinhascopa.com
            </a>{" "}
            com o assunto <em>“Solicitação de exclusão de conta – Troca
            Figurinhas”</em>, ou use o formulário de contato no rodapé desta
            página.
          </li>
          <li>
            Informe o <strong>e-mail cadastrado no app</strong> (o mesmo
            usado para login) para que possamos localizar a conta.
          </li>
          <li>
            Por segurança, podemos enviar uma confirmação para esse e-mail
            antes de processar a exclusão, garantindo que a solicitação
            partiu do titular da conta.
          </li>
          <li>
            A exclusão é processada manualmente em até{" "}
            <strong>30 dias corridos</strong> a partir da confirmação.
          </li>
        </ol>

        <p>
          <strong>O que é excluído</strong>
        </p>
        <p>
          Após o processamento, removemos permanentemente dos nossos
          sistemas:
        </p>
        <ul>
          <li>Dados de cadastro (nome, e-mail, senha e foto de perfil);</li>
          <li>
            Sua coleção de figurinhas, álbuns e configurações do perfil;
          </li>
          <li>
            Histórico de matches, mensagens trocadas no app e avaliações;
          </li>
          <li>Localização aproximada e demais preferências de uso.</li>
        </ul>

        <p>
          <strong>O que pode ser mantido (e por quanto tempo)</strong>
        </p>
        <p>
          Alguns dados podem ser retidos, de forma segregada, mesmo após a
          exclusão da conta, quando houver fundamento legal para isso:
        </p>
        <ul>
          <li>
            <strong>Registros de transações</strong> (assinaturas e compras
            no app): mantidos pelo prazo exigido pela legislação fiscal e
            tributária, em geral de até <strong>5 anos</strong>.
          </li>
          <li>
            <strong>Registros de acesso e logs de aplicação:</strong>{" "}
            mantidos por até <strong>6 meses</strong>, conforme o art. 15 do
            Marco Civil da Internet (Lei nº 12.965/2014).
          </li>
          <li>
            <strong>Dados necessários ao exercício regular de direitos</strong>{" "}
            em processos judiciais, administrativos ou arbitrais, pelos
            prazos prescricionais aplicáveis.
          </li>
          <li>
            <strong>Comunicações trocadas com o suporte</strong>, mantidas
            por até <strong>2 anos</strong> para fins de auditoria e
            qualidade de atendimento.
          </li>
        </ul>
        <p>
          Esses dados retidos ficam restritos às finalidades acima e não são
          utilizados para perfil de uso, marketing ou recomendação dentro do
          app.
        </p>
      </>
    ),
  },
];

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-25 lg:px-30">
      <div className="mx-auto flex max-w-[820px] flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold uppercase tracking-[2px] text-accent-teal sm:text-[13px]">
            Política de Privacidade
          </span>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
            Como cuidamos dos seus dados
          </h1>
          <p className="text-sm text-ink-muted sm:text-[15px]">
            Última atualização: {lastUpdate}
          </p>
        </div>

        <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-ink-soft sm:text-base [&_a]:break-words [&_li]:my-1 [&_p]:my-2 [&_strong]:text-ink [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6">
          {sections.map((s) => (
            <article key={s.title} className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                {s.title}
              </h2>
              <div>{s.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
