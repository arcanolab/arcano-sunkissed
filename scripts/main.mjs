// Sunkissed — Taverna e Estalagem (Arcano Lab): mapa de batalha de Westruun para Foundry VTT v14 + dnd5e.
// A cena, os atores, os diários e as playlists vêm do compêndio de Aventura "Sunkissed — Taverna e Estalagem" (aba Compêndios -> Importar).
const MOD = "arcano-sunkissed", CENA = "SunkissedCenaV4a";
Hooks.once("ready", () => {
  if (!game.users.activeGM?.isSelf || game.scenes.get(CENA)) return;
  ui.notifications.info("Sunkissed: abra o compêndio “Sunkissed — Taverna e Estalagem” (aba Compêndios), clique na aventura e em Importar para criar a cena, os NPCs e os diários.", {permanent: true});
});

/* Diários deste módulo em tema claro (pergaminho), sem mudar o tema do resto do Foundry. Se o módulo de Westruun estiver ativo, ele já cuida disso. */
Hooks.on("renderJournalEntrySheet", (app, el) => {
  const doc = app.document ?? app.entry; if (!doc?.flags?.[MOD] || game.modules.get("arcano-westruun")?.active) return;
  const e = el instanceof HTMLElement ? el : app.element; if (!e?.classList) return;
  e.classList.add("aw-diario"); e.classList.remove("theme-dark"); e.classList.add("themed", "theme-light");
});

/* Níveis: JOGADOR não interage com token de OUTRO andar (só nas cenas deste módulo). */
Hooks.on("refreshToken", token => {
  if (game.user.isGM || !canvas.scene?.flags?.[MOD]) return;
  const nv = canvas.level?.id, doNivel = token.document.level, outro = !!(nv && doNivel && doNivel !== nv);
  if (outro) { token.eventMode = "none"; token.interactive = false; for (const k of ["nameplate", "tooltip", "bars", "border"]) if (token[k]) token[k].visible = false; }
  else if (token.eventMode === "none") { token.eventMode = "static"; token.interactive = true; }
});
