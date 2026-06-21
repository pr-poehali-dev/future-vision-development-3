export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">CREMA*CAFE</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Десерты</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              КОФЕ И ДЕСЕРТЫ
              <br />
              С ВАЙБОМ <span>70-Х</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Ароматный кофе на свежей обжарке и десерты ручной работы. Уютная атмосфера ретро-кофейни для твоих лучших моментов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖАЯ
              <br />
              ОБЖАРКА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЭСТЕТИКА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОГОНЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КОФЕ НА СВЕЖЕЙ ОБЖАРКЕ * ДЕСЕРТЫ РУЧНОЙ РАБОТЫ * РЕТРО ВАЙБ 70-Х * ЗАВТРАКИ ДО 12:00 * УЮТНО КАЖДЫЙ ДЕНЬ *
            КОФЕ НА СВЕЖЕЙ ОБЖАРКЕ * ДЕСЕРТЫ РУЧНОЙ РАБОТЫ * РЕТРО ВАЙБ 70-Х * ЗАВТРАКИ ДО 12:00 * УЮТНО КАЖДЫЙ ДЕНЬ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/4a474774-723e-426e-bf57-fd27525d97d1/files/02db0a7d-a459-4422-8aba-0cad3134ee05.jpg"
                alt="Капучино"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Капучино</h3>
                  <span className="price">280 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Зёрна свежей обжарки, бархатное молоко и фирменная латте-арт подача.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Новинка
              </span>
              <img
                src="https://cdn.poehali.dev/projects/4a474774-723e-426e-bf57-fd27525d97d1/files/3ac843f4-645b-459f-84a6-8870c4771ef5.jpg"
                alt="Чизкейк с ягодами"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Чизкейк с ягодами</h3>
                  <span className="price">390 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Нежный сырный крем, песочная основа и свежие сезонные ягоды.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/4a474774-723e-426e-bf57-fd27525d97d1/files/cd25055d-aa1c-4484-b6ff-4353cb6a6063.jpg"
                alt="Карамельный латте"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Карамельный латте</h3>
                  <span className="price">340 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Эспрессо, солёная карамель, взбитые сливки и лёд — освежает по-летнему.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">УЮТ В КАЖДОЙ ЧАШКЕ.</h2>
            <p className="vibe-text">
              Мы не просто варим кофе. Мы создаём моменты. От винилового джаза до мягких диванов в стиле 70-х — каждый уголок
              продуман для твоего идеального утра. Заходи на чашку кофе и кусочек десерта.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
@CREMA.CAFE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">CREMA*CAFE</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для ароматного кофе, домашних десертов и лоу-фай атмосферы. С 2024, но ощущается как 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт-Чт: 12:00 - 23:00</li>
            <li>Пт-Сб: 12:00 - 02:00</li>
            <li>Вс: 11:00 - 21:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 CREMA CAFE</span>
          <span>КОФЕ И ДЕСЕРТЫ</span>
          <span>IG / TW / TK</span>
        </div>
      </footer>
    </>
  );
}