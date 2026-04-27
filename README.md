# 7FATO 🎧

Estúdio de produção musical profissional, mixagem e masterização de alto nível em São Paulo. Este projeto foi desenvolvido com foco em performance, escalabilidade e experiência do usuário premium.

## 🚀 Tech Stack

O projeto utiliza as tecnologias mais modernas do ecossistema Next.js:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (Global Audio Player)
- **Audio Engine:** [Howler.js](https://howlerjs.com/)
- **Internationalization:** i18n Nativo (PT-BR / EN) com detecção automática de locale.
- **Icons:** [Lucide React](https://lucide.dev/)

## 🛠️ Arquitetura

Estrutura baseada em **Clean Architecture** para facilitar a manutenção:

- `/src/i18n`: Dicionários e configurações de internacionalização.
- `/src/store`: Estado global (Zustand) para manter o áudio tocando entre navegações.
- `/src/hooks`: Hooks customizados para abstração de lógica.
- `/src/lib`: Configurações de terceiros (Howler, Tailwind Merge).
- `/src/utils`: Funções utilitárias puras (Normalização de strings, etc).

## 🏁 Como Rodar o Projeto

1.  **Instale as dependências:**

    ```bash
    pnpm install
    ```

2.  **Inicie o servidor de desenvolvimento:**

    ```bash
    pnpm dev
    ```

3.  **Acesse o projeto:**
    O middleware redirecionará automaticamente para: [http://localhost:3000/pt](http://localhost:3000/pt)

## 🚧 Roadmap de Desenvolvimento

- [x] Setup de Arquitetura & i18n
- [x] Engine de Áudio & Global Store
- [x] Configuração Tailwind v4 (Identidade 7FATO)
- [ ] UI: Header & Seletor de Idioma
- [ ] UI: Player Visual Persistente
- [ ] Portfólio de Beats & Checkout

---

Desenvolvido por **Sir. Akally**.
