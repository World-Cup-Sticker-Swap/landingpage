import { useEffect } from "react";

const lastUpdate = "9 de maio de 2026";

const MAILTO_HREF =
  "mailto:contato@trocafigurinhascopa.com?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20conta%20%E2%80%93%20Troca%20Figurinhas&body=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20a%20exclus%C3%A3o%20da%20minha%20conta%20no%20app%20Troca%20Figurinhas.%0A%0AE-mail%20cadastrado%20no%20app%3A%20";

export function DeleteAccount() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-25 lg:px-30">
      <div className="mx-auto flex max-w-[820px] flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold uppercase tracking-[2px] text-accent-teal sm:text-[13px]">
            Exclusão de conta
          </span>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
            Solicitar exclusão de conta — Troca Figurinhas
          </h1>
          <p className="text-sm text-ink-muted sm:text-[15px]">
            Última atualização: {lastUpdate}
          </p>
        </div>

        <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-ink-soft sm:text-base [&_a]:break-words [&_li]:my-1 [&_p]:my-2 [&_strong]:text-ink [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6">
          <article className="flex flex-col gap-2">
            <p>
              Esta página permite que usuários do aplicativo{" "}
              <strong>Troca Figurinhas</strong> solicitem a exclusão da sua
              conta e dos dados associados. O app é desenvolvido por{" "}
              <strong>35.974.878 PATRICIA ALMEIDA QUEIROZ</strong> (CNPJ
              35.974.878/0001-02), com sede em Salvador, Bahia – Brasil.
            </p>
          </article>

          <article className="flex flex-col gap-2">
            <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
              Como solicitar a exclusão
            </h2>
            <ol className="my-2 list-decimal pl-6 [&_li]:my-1">
              <li>
                Clique no botão abaixo (ou envie um e-mail manualmente para{" "}
                <a
                  href="mailto:contato@trocafigurinhascopa.com"
                  className="text-brand-dark underline"
                >
                  contato@trocafigurinhascopa.com
                </a>
                ) com o assunto{" "}
                <em>
                  “Solicitação de exclusão de conta – Troca Figurinhas”
                </em>
                .
              </li>
              <li>
                Informe o <strong>e-mail cadastrado no app</strong> (o mesmo
                usado para login) para que possamos localizar a conta.
              </li>
              <li>
                Por segurança, podemos enviar uma confirmação para esse
                e-mail antes de processar a exclusão, garantindo que a
                solicitação partiu do titular da conta.
              </li>
              <li>
                A exclusão é processada manualmente em até{" "}
                <strong>30 dias corridos</strong> a partir da confirmação.
              </li>
            </ol>

            <div className="mt-3">
              <a
                href={MAILTO_HREF}
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Solicitar exclusão por e-mail
              </a>
            </div>
          </article>

          <article className="flex flex-col gap-2">
            <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
              Quais dados são excluídos
            </h2>
            <p>
              Após o processamento, removemos permanentemente dos nossos
              sistemas:
            </p>
            <ul>
              <li>
                Dados de cadastro (nome, e-mail, senha e foto de perfil);
              </li>
              <li>
                Sua coleção de figurinhas, álbuns e configurações do perfil;
              </li>
              <li>
                Histórico de matches, mensagens trocadas no app e
                avaliações;
              </li>
              <li>Localização aproximada e demais preferências de uso.</li>
            </ul>
          </article>

          <article className="flex flex-col gap-2">
            <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
              Quais dados podem ser mantidos (e por quanto tempo)
            </h2>
            <p>
              Alguns dados podem ser retidos, de forma segregada, mesmo
              após a exclusão da conta, quando houver fundamento legal para
              isso:
            </p>
            <ul>
              <li>
                <strong>Registros de transações</strong> (assinaturas e
                compras no app): mantidos pelo prazo exigido pela
                legislação fiscal e tributária, em geral de até{" "}
                <strong>5 anos</strong>.
              </li>
              <li>
                <strong>Registros de acesso e logs de aplicação:</strong>{" "}
                mantidos por até <strong>6 meses</strong>, conforme o art.
                15 do Marco Civil da Internet (Lei nº 12.965/2014).
              </li>
              <li>
                <strong>
                  Dados necessários ao exercício regular de direitos
                </strong>{" "}
                em processos judiciais, administrativos ou arbitrais, pelos
                prazos prescricionais aplicáveis.
              </li>
              <li>
                <strong>Comunicações trocadas com o suporte</strong>,
                mantidas por até <strong>2 anos</strong> para fins de
                auditoria e qualidade de atendimento.
              </li>
            </ul>
            <p>
              Esses dados retidos ficam restritos às finalidades acima e
              não são utilizados para perfil de uso, marketing ou
              recomendação dentro do app.
            </p>
          </article>

          <article className="flex flex-col gap-2">
            <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
              Dúvidas
            </h2>
            <p>
              Para mais detalhes sobre como tratamos os seus dados,
              consulte a nossa{" "}
              <a href="/privacidade" className="text-brand-dark underline">
                Política de Privacidade
              </a>
              . Para qualquer outro assunto, escreva para{" "}
              <a
                href="mailto:contato@trocafigurinhascopa.com"
                className="text-brand-dark underline"
              >
                contato@trocafigurinhascopa.com
              </a>
              .
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
