import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Mail, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

const SERVICE_ID = "service_u0ngf7m";
const TEMPLATE_ID = "template_lmf547r";
const PUBLIC_KEY = "PSwCVBt6Nqurr_KhM";
const TO_EMAIL = "hiagogentilbusiness@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const from_name = String(data.get("from_name") ?? "").trim();
    const from_email = String(data.get("from_email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!from_name || !from_email || !message) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          email: TO_EMAIL,
          from_name,
          from_email,
          reply_to: from_email,
          message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Não foi possível enviar agora."
      );
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-ink-muted transition hover:bg-surface-card hover:text-ink"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>

        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-soft text-brand-dark">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <div className="flex flex-col">
            <h3
              id="contact-title"
              className="font-display text-lg font-extrabold text-ink"
            >
              Fale com a gente
            </h3>
            <p className="text-xs text-ink-muted">
              Resposta em até 24h em dias úteis.
            </p>
          </div>
        </div>

        {status === "sent" ? (
          <div className="mt-6 flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2
              className="h-10 w-10 text-accent-teal"
              aria-hidden
            />
            <p className="font-display text-base font-bold text-ink">
              Mensagem enviada!
            </p>
            <p className="text-sm text-ink-muted">
              Já recebemos. Vamos responder pelo seu e-mail.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
            <Field label="Seu nome">
              <input
                ref={firstFieldRef}
                name="from_name"
                type="text"
                required
                maxLength={80}
                className="rounded-xl border border-surface-raised bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-brand"
                placeholder="Como podemos te chamar"
              />
            </Field>
            <Field label="Seu e-mail">
              <input
                name="from_email"
                type="email"
                required
                maxLength={120}
                className="rounded-xl border border-surface-raised bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-brand"
                placeholder="voce@exemplo.com"
              />
            </Field>
            <Field label="Mensagem">
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={4}
                className="resize-none rounded-xl border border-surface-raised bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-brand"
                placeholder="Conte como podemos ajudar."
              />
            </Field>

            {status === "error" && (
              <p className="text-xs font-medium text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Enviando…
                </>
              ) : (
                "Enviar mensagem"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
