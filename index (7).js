

( () => {
    "use strict";
    var t, e, i, s, a = {
        28: (t, e, i) => {
            i.d(e, {
                I7: () => n,
                PW: () => s,
                _O: () => a
            });
            const s = (t, e=0) => t[e] | t[e + 1] << 8
              , a = t => {
                const e = unescape(encodeURIComponent(t))
                  , i = new Uint8Array(e.length + 1);
                for (let t = 0; t < e.length; t++)
                    i[t] = e.charCodeAt(t);
                return i[e.length] = 0,
                i
            }
              , n = (t, e=0) => {
                let i = ""
                  , s = e;
                for (; 0 !== t[s] && s < t.length; )
                    i += String.fromCharCode(t[s]),
                    s++;
                return decodeURIComponent(escape(i))
            }
        }
        ,
        58: (t, e, i) => {
            i.a(t, (async (t, e) => {
                try {
                    var s = i(512)
                      , a = i(110)
                      , n = i(446)
                      , h = i(904)
                      , r = i(111)
                      , o = i(28)
                      , l = i(874);
                      globalThis.moderators = ["Igor", "THEGOAT", "Igormain"];
                    function d(t) {
                        const e = [];
                        if (s.A.mobTable?.length > 0) {
                            for (let i = 0; i < t; i++)
                                e.push(s.A.mobTable[Math.random() * s.A.mobTable.length | 0]);
                            return e
                        }
                        let i = !1
                          , a = 0
                          , h = 0;
                        for (let s = 0; s < t; s++)
                            for (; ; ) {
                                if (Math.random() > .925 && h < 3) {
                                    h++,
                                    e.push(-1);
                                    break
                                }
                                const s = Math.random() * n.ey.length | 0
                                  , r = n.ey[s].name.toLowerCase();
                                if (!n.ey[s].isSystem) {
                                    if (n.ey[s].tiers[0].antHoleSpawns?.length > 0) {
                                        if (i)
                                            continue;
                                        i = !0
                                    } else if (r.includes("ant") || r.includes("termite") || r.includes("system"))
                                        continue;
                                    if (!(r.includes("queen") && r.includes("egg") || (r.includes("shiny") || r.includes("angelic")) && Math.random() > .01)) {
                                        if (r.includes("demon")) {
                                            if (a >= .125 * t)
                                                continue;
                                            a++
                                        }
                                        e.push(s);
                                        break
                                    }
                                }
                            }
                        return e
                    }
                    function c() {
                        if (s.A.mobTable?.length > 0)
                            return s.A.mobTable[Math.random() * s.A.mobTable.length | 0];
                        let t = 0;
                        for (; t++ < 100; ) {
                            const t = Math.random() * n.ey.length | 0
                              , e = n.ey[t].name.toLowerCase();
                            if (n.ey[t].tiers[0].antHoleSpawns?.length > 0 && Math.random() > .9)
                                return t;
                            if (!((e.includes("ant") || e.includes("termite")) && Math.random() > .2)) {
                                if (e.includes("demon") && Math.random() > .995)
                                    return t;
                                if (!n.ey[t].isSystem)
                                    return t
                            }
                        }
                        return 0
                    }
                    setInterval(( () => {
                        const t = performance.now();
                        switch (s.A.spatialHash.clear(),
                        s.A.viewsSpatialHash.clear(),
                        s.A.entities.forEach((t => {
                            t.update()
                        }
                        )),
                        s.A.entities.forEach((t => {
                            t._AABB && t.collide()
                        }
                        )),
                        s.A.gamemode) {
                        case a.LX.FFA:
                        case a.LX.TDM:
                            {
                                const t = s.A.width
                                  , e = 1024 + 256 * (s.A.clients.size - 1);
                                t !== e && (s.A.width = s.A.height = e,
                                s.A.maxMobs = 10 + 2 * (s.A.clients.size - 1),
                                s.A.clients.forEach((t => t.sendRoom())))
                            }
                            break;
                        case a.LX.WAVES:
                            if (s.A.isWaves && s.A.livingMobCount <= 0) {
                                s.A.currentWave++,
                                s.A.maxMobs = Math.min(64, 6 + 2 * s.A.currentWave),
                                s.A.width = s.A.height = Math.min(1024 + 81 * s.A.currentWave, Math.pow(128, 2)),
                                s.A.clients.forEach((t => t.sendRoom()));
                                const t = d(s.A.maxMobs);
                                for (let e = 0; e < s.A.maxMobs; e++) {
                                    if (-1 === t[e]) {
                                        new h.cS(s.A.random(),Math.max(0, (0,
                                        l.ZL)(s.A.currentWave, 4.83 * Math.pow(1.012, s.A.currentWave), n.cK.length - 1)),s.A.currentWave);
                                        continue
                                    }
                                    const i = new h.Bw(s.A.random());
                                    i.define(n.ey[t[e]], (0,
                                    l.ZL)(s.A.currentWave, 4.83 * Math.pow(1.012, s.A.currentWave), n.cK.length - 1)),
                                    s.A.aliveMobs.push(i)
                                }
                            }
                            break;
                        case a.LX.LINE:
                            {
                                const t = s.A.width
                                  , e = s.A.height;
                                s.A.width = 16384,
                                s.A.height = 4096,
                                s.A.maxMobs = 10 + 2 * (s.A.clients.size - 1),
                                t === s.A.width && e === s.A.height || s.A.clients.forEach((t => t.sendRoom()))
                            }
                            break;
                        case a.LX.MAZE:
                            s.A.maxMobs = 32 + (16 * s.A.clients.size)
                        }
                        if (s.A.gamemode === a.LX.MAZE && s.A.livingMobCount < s.A.maxMobs)
                            if (s.A.gamemode === a.LX.MAZE) {
                                if (Math.random() < 0.7) return;
                                let t = n.ey[c()];

                                const e = s.A.spawnNearPlayer(t);
                                if (!e.tile) return;
                                let difficulty = e.tile.score * 70
                                let newrarity = Math.min(6, e.rarity);
                                if (difficulty > 55) {
                                    if (newrarity === 6) {
                                        newrarity += Math.random() >= 0.995 ? 1 : 0
                                    }
                                    if (newrarity == 7) newrarity += Math.random() >= 0.9 ? 2 : 0
                                }
                                else if (difficulty > 45) {
                                    newrarity = Math.max(newrarity, 5)
                                    if (newrarity === 6) {
                                        newrarity -= Math.random() >= 0.8 ? 1 : 0
                                    }
                                }

                                

                                if (void 0 !== e.tile?.spawn) {
                                    const i = s.A.mapData.mobSpawners.find((t => 

                                        t.id === e.tile.spawn

                                    ));
                                    if (i && i.availableMobs.length) {
                                        const s = i.availableMobs;
                                        let totalWeight = 0
                                        i.availableMobs.forEach(p => totalWeight += p.weight)
                                        let weight = Math.random() * totalWeight;
                                        for (let z = 0; z < i.availableMobs.length; z++) {
                                            weight -= i.availableMobs[z].weight;
                                            if (weight < 0) {
                                                t = n.ey[i.availableMobs[z].mobId]
                                                break
                                            }
                                        }

                                    }

                                }
                                setTimeout(() => {
                                    if (s.A.livingMobCount < s.A.maxMobs) {
                                        new h.Bw(e.position).define(t, newrarity),
        
                                        newrarity >= s.A.announceRarity && s.A.announceRarity > -1 && (n.cK[newrarity] ? s.A.clients.forEach((i => i.systemMessage((0,
        
                                        l.Br)(n.cK[newrarity].name, !0) + " " + t.name + " has spawned!", n.cK[newrarity].color))) : console.error(`Rarity returns undefined: ${e.rarity}`))}
                                }, 2500);
                                

                            } else if (s.A.isLineMap) {

                                const t = n.ey[c()]

                                  , e = s.A.lineMapMobSpawn(t);

                                new h.Bw(e.position).define(t, e.rarity)

                            } else {

                                new h.Bw(s.A.random()).define(n.ey[c()], h.Bw.TEMPORARY_RANDOM_RARITY())

                            }
                        s.A.lag.totalTime += performance.now() - t,
                        s.A.lag.ticks++
                    }
                    ), 1e3 / 22.5);
                    let g = 0;
                    switch (setInterval(( () => {
                        s.A.lag.mspt = s.A.lag.totalTime / Math.max(1, s.A.lag.ticks),
                        s.A.lag.fps = s.A.lag.ticks,
                        s.A.lag.totalTime = 0,
                        s.A.lag.ticks = 0,
                        !r.A.isSandbox && ++g
                    }
                    ), 1e3),
                    setInterval(( () => {
                        s.A.drops.forEach((t => t.update())),
                        s.A.lightning.forEach((t => t.update()))
                    }
                    ), 1e3 / 22.5),
                    setInterval(( () => s.A.clients.forEach((t => t.worldUpdate()))), 40),
                    s.A.router = new r.A,
                    globalThis.environmentName) {
                    case "browser":
                        self.onmessage = async ({data: t}) => {
                            switch (t[0]) {
                            case 0:
                                s.A.router.addClient((0,
                                o.PW)(t, 1), (0,
                                o.I7)(t, 4), t[3]);
                                break;
                            case 1:
                                s.A.router.pipeMessage((0,
                                o.PW)(t, 1), new DataView(t.buffer,t.byteOffset + 3,t.byteLength - 3));
                                break;
                            case 2:
                                s.A.router.removeClient((0,
                                o.PW)(t, 1));
                                break;
                            case "start":
                                s.A.router.begin(t),
                                t[2] && new u
                            }
                        }
                        ,
                        s.A.router.postMessage = t => self.postMessage(t);
                        break;
                    case "node":
                        throw new Error("Node environment not supported");
                    case "bun":
                        {
                            "true" !== Bun.env.ENV_DONE && (await Bun.write("./.env", ["ENV_DONE=false", "ROUTING_SERVER=https://routing.floof.supercord.lol", "GAME_NAME=dedicated lobby", "MODDED=false", "GAMEMODE=maze", `SECRET=${Array.from(crypto.getRandomValues(new Uint8Array(24))).map((t => t.toString(16).padStart(2, "0"))).join("")}`, "ADMIN_KEYS=devkey,devkey2", "BIOME=0", "HOST=dedicated.floof.supercord.lol", "PORT=3005", "TLS_DIRECTORY=false"].join("\n")),
                            console.warn("Please fill out the .env file with the correct values. Set ENV_DONE to 'true' when done."),
                            process.exit()),
                            "true" !== Bun.env.MODDED && "false" !== Bun.env.MODDED && (console.error("MODDED must be 'true' or 'false'"),
                            process.exit()),
                            ["ffa", "tdm", "waves", "line", "maze"].includes(Bun.env.GAMEMODE) || (console.error("GAMEMODE must be 'ffa', 'tdm', 'waves', 'line', or 'maze'"),
                            process.exit()),
                            /^[0-9a-f]{48}$/i.test(Bun.env.SECRET) || (console.error("SECRET must be a 48 character hex string"),
                            process.exit()),
                            Bun.env.ADMIN_KEYS.split(",").every((t => "string" == typeof t)) || (console.error("ADMIN_KEYS must be a comma separated list of strings"),
                            process.exit()),
                            -1 == Bun.env.BIOME && (console.log("BIOME is set to -1, selecting random biome"),
                            Bun.env.BIOME = l.Iv ? a.VC.HALLOWEEN : 8 * Math.random() | 0);
                            const y = Bun.env.ADMIN_KEYS.split(",").filter((t => t.length > 3));
                            let f = 1;
                            const A = new Map
                              , w = new Map
                              , b = Bun.serve({
                                fetch(t) {
                                    const e = b.requestIP(t);
                                    if (!e?.address)
                                        return new Response(":(");
                                    return b.upgrade(t, {
                                        data: {
                                            socketID: f++,
                                            searchParams: new URLSearchParams(t.url.split("?").slice(1).join("?")),
                                            begin: performance.now(),
                                            ip: e.address
                                        }
                                    }) ? void 0 : new Response("Hello world")
                                },
                                websocket: {
                                    perMessageDeflate: !0,
                                    idleTimeout: 0,
                                    async open(t) {
                                        t.binaryType = "arraybuffer";
                                        const e = s.A.router.addClient(t.data.socketID, t.data.searchParams.get("uuid"), y.includes(t.data.searchParams.get("clientKey")));
                                        if (e) {
                                            A.set(t.data.socketID, t);
                                            let i = (w.get(t.data.ip) ?? 0) + 1;
                                            if (i > 100)
                                                return void e.kick("Too many connections from this IP");
                                            w.set(t.data.ip, i);
                                            try {
                                                const t = await fetch(`${Bun.env.ROUTING_SERVER}/uuid/check?uuid=${e.uuid}&trustedKey=${Bun.env.SECRET}`)
                                                  , i = await t.json();
                                                if (!i.ok || !i.isValid)
                                                    return void e.kick("DAR-6")
                                            } catch (t) {
                                                return console.error(t),
                                                void e.kick("DAR-5")
                                            }
                                        }
                                    },
                                    close(t) {
                                        s.A.router.removeClient(t.data.socketID),
                                        A.delete(t.data.socketID),
                                        v.readyState === WebSocket.OPEN && t.data.searchParams.has("analytics") && v.send(new Uint8Array([a.jU.ANALYTICS_DATA, ...(0,
                                        o._O)(t.data.searchParams.get("analytics")), ...(0,
                                        o._O)((performance.now() - t.data.begin).toFixed(2))]));
                                        let e = (w.get(t.data.ip) ?? 0) - 1;
                                        e <= 0 ? w.delete(t.data.ip) : w.set(t.data.ip, e)
                                    },
                                    message(t, e) {
                                        "string" != typeof e && s.A.router.pipeMessage(t.data.socketID, new DataView(e))
                                    }
                                },
                                port: +Bun.env.DEDICATED_LOBBY_PORT,
                                tls: "false" !== Bun.env.TLS_DIRECTORY ? {
                                    key: Bun.file(`${Bun.env.TLS_DIRECTORY}/privkey.pem`),
                                    cert: Bun.file(`${Bun.env.TLS_DIRECTORY}/fullchain.pem`)
                                } : void 0
                            })
                              , M = -Math.floor((new Date).getTimezoneOffset() / 60)
                              , v = new WebSocket(`${Bun.env.ROUTING_SERVER.replace("http", "ws")}/ws/lobby?gameName=${Bun.env.GAME_NAME}&isModded=${"true" == Bun.env.MODDED ? "yes" : "no"}&gamemode=${Bun.env.GAMEMODE}&secretKey=${Bun.env.SECRET}&isPrivate=no&biome=${Bun.env.BIOME}&directConnect=${Bun.env.HOST},${M}&analytics=${ANALYTICS_DATA}`,{
                                origin: Bun.env.HOST,
                                headers: {
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
                                }
                            });
                            v.binaryType = "arraybuffer";
                            const x = [];
                            v.onopen = () => {
                                console.log("Connected to server"),
                                s.A.router.begin(["start", Bun.env.GAMEMODE, "true" == Bun.env.MODDED, crypto.randomUUID(), +Bun.env.BIOME]),
                                v.onmessage = t => {
                                    const e = new Uint8Array(t.data);
                                    if (255 !== e[0])
                                        ;
                                    else {
                                        if (!(1 === e[1]))
                                            throw new Error("Request rejected by server");
                                        console.log("Lobby Verified", (new TextDecoder).decode(e.slice(2, -1)))
                                    }
                                }
                                ,
                                x.forEach((t => t()))
                            }
                            ,
                            v.onclose = () => {
                                console.log("Disconnected from server"),
                                s.A.clients.forEach((t => t.kick("Connection to lobby server lost"))),
                                setTimeout(( () => process.exit()), 1e3)
                            }
                            ,
                            s.A.router.postMessage = t => {
                                switch (t[0]) {
                                case a.jU.PIPE_PACKET:
                                    const e = A.get((0,
                                    o.PW)(t, 1));
                                    null != e && e.readyState === WebSocket.OPEN && e.send(t.slice(3));
                                    break;
                                case a.jU.CLOSE_CLIENT:
                                    A.get((0,
                                    o.PW)(t, 1))?.close();
                                    break;
                                default:
                                    v.readyState === WebSocket.OPEN ? (v.send(t),
                                    console.log(`Lobby ready state: ${v.readyState}`)) : (console.log("Lobby ready state: Closed."),
                                    x.push(( () => v.send(t))))
                                }
                            }
                        }
                        break;
                    default:
                        throw new Error("Invalid environment")
                    }
                    let p = !1;
                    function m() {
                        s.A.router.postMessage(new Uint8Array([2, ...(0,
                        o._O)(JSON.stringify((0,
                        a.Gf)(n.cK, n.GJ, n.ey)))])),
                        p && setTimeout(( () => s.A.clients.forEach((t => t.talk(a.de.UPDATE_ASSETS)))), 250),
                        p = !0
                    }
                    m();
                    class u {
                        static TRANSFERRABLE_TYPES = {
                            PetalConfig: 0,
                            MobConfig: 1
                        };
                        static assignTransferrableType(t, e) {
                            let i;
                            if (e === u.TRANSFERRABLE_TYPES.PetalConfig) {
                                i = Object.assign(new n.lm("",0,0,0), structuredClone(t));
                                for (const e in t) {
                                    const s = structuredClone(t[e]);
                                    switch (e) {
                                    case "drawing":
                                        i.drawing = Object.assign(new a.H1, s);
                                        break;
                                    case "tiers":
                                        for (let t = 0; t < s.length; t++)
                                            i.tiers[t] = Object.assign(new a.z(0,0,0), s[t])
                                    }
                                }
                            }
                            return i
                        }
                        #t = null;
                        constructor() {
                            this.#t = new BroadcastChannel("floofModdingAPI"),
                            this.#t.onmessage = t => this.parseModdingAPICommand(t.data)
                        }
                        floofModdingResponse(t, e, i, s=null, a=null) {
                            this.#t.postMessage([t, {
                                ok: e,
                                message: i,
                                data: s
                            }, a])
                        }
                        validateArg(t, e, i, s, a) {
                            return typeof i !== s ? (this.floofModdingResponse(t, !1, `Argument ${e} must be of type ${s}`),
                            !1) : !a || !(i < a[0] || i > a[1]) || (this.floofModdingResponse(t, !1, `Argument ${e} must be between ${a[0]} and ${a[1]}`),
                            !1)
                        }
                        parseModdingAPICommand(t) {
                            const [e,i,...r] = t;
                            switch (i) {
                            case "spawnMob":
                                {
                                    if (2 !== r.length)
                                        return void this.floofModdingResponse(e, !1, "spawnMob(index, rarity) requires 2 arguments!");
                                    if (!this.validateArg(e, "index", r[0], "number", [0, n.ey.length - 1]) || !this.validateArg(e, "rarity", r[1], "number", [0, n.cK.length - 1]))
                                        return;
                                    const t = new h.Bw(s.A.random());
                                    t.define(n.ey[r[0]], r[1]),
                                    this.floofModdingResponse(e, !0, "Mob spawned successfully", {
                                        id: t.id,
                                        index: t.index,
                                        rarity: t.rarity,
                                        indexName: n.ey[t.index].name,
                                        rarityName: n.cK[t.rarity].name,
                                        position: {
                                            x: t.x,
                                            y: t.y
                                        }
                                    }),
                                    s.A.isWaves && (s.A.aliveMobs.push(t),
                                    s.A.maxMobs++)
                                }
                                break;
                            case "setRoomInfo":
                                if (r.length < 1 || r.length > 5)
                                    return void this.floofModdingResponse(e, !1, "setRoomInfo(dynamic, width*, height*, mobCount*, currentWave*) requires 1 argument, has 4 extra optional arguments!");
                                if (!this.validateArg(e, "dynamic", r[0], "boolean"))
                                    return;
                                if (!0 === r[0]) {
                                    if (1 !== r.length)
                                        return void this.floofModdingResponse(e, !1, "setRoomInfo(true) requires no extra arguments!")
                                } else if (!(this.validateArg(e, "width", r[1], "number", [256, 131072]) && this.validateArg(e, "height", r[2], "number", [256, 131072]) && this.validateArg(e, "mobCount", r[3], "number", [0, 4096]) && this.validateArg(e, "currentWave", r[4], "number", [0, 4096])))
                                    return;
                                s.A.dynamicRoom = r[0],
                                s.A.dynamicRoom || (s.A.width = r[1],
                                s.A.height = r[2],
                                s.A.maxMobs = r[3],
                                s.A.currentWave = r[4] - 1,
                                s.A.livingMobCount = 0),
                                s.A.clients.forEach((t => t.sendRoom())),
                                this.floofModdingResponse(e, !0, "Room info set successfully", {
                                    dynamic: s.A.dynamicRoom,
                                    width: s.A.width,
                                    height: s.A.height,
                                    mobCount: s.A.maxMobs,
                                    wave: s.A.currentWave
                                });
                                break;
                            case "getRoomInfo":
                                if (0 !== r.length)
                                    return void this.floofModdingResponse(e, !1, "getRoomInfo() requires 0 arguments!");
                                this.floofModdingResponse(e, !0, "Room info fetched successfully", {
                                    dynamic: s.A.dynamicRoom,
                                    width: s.A.width,
                                    height: s.A.height,
                                    mobCount: s.A.maxMobs,
                                    wave: s.A.wave
                                });
                                break;
                            case "getPlayers":
                                if (0 !== r.length)
                                    return void this.floofModdingResponse(e, !1, "getPlayers() requires 0 arguments!");
                                const t = [];
                                s.A.clients.forEach((e => {
                                    t.push({
                                        clientID: e.id,
                                        username: e.username,
                                        slots: {
                                            primary: e.slots.map((t => ({
                                                index: t.id,
                                                rarity: t.rarity,
                                                indexName: n.GJ[t.id].name,
                                                rarityName: n.cK[t.rarity].name
                                            }))),
                                            secondary: e.secondarySlots.map((t => t ? {
                                                index: t.id,
                                                rarity: t.rarity,
                                                indexName: n.GJ[t.id].name,
                                                rarityName: n.cK[t.rarity].name
                                            } : null)),
                                            highestRarity: e.highestRarity
                                        },
                                        level: {
                                            xp: Math.round(e.xp),
                                            level: e.level,
                                            progress: +e.levelProgress.toFixed(4)
                                        },
                                        body: e.body ? {
                                            id: e.body.id,
                                            position: {
                                                x: e.body.x,
                                                y: e.body.y
                                            }
                                        } : null
                                    })
                                }
                                )),
                                this.floofModdingResponse(e, !0, "Players fetched successfully", t);
                                break;
                            case "getMobs":
                                if (0 !== r.length)
                                    return void this.floofModdingResponse(e, !1, "getMobs() requires 0 arguments!");
                                const o = [];
                                s.A.entities.forEach((t => {
                                    t.type === a.wv.MOB && o.push({
                                        id: t.id,
                                        index: t.index,
                                        rarity: t.rarity,
                                        indexName: n.ey[t.index].name,
                                        rarityName: n.cK[t.rarity].name,
                                        position: {
                                            x: t.x,
                                            y: t.y
                                        }
                                    })
                                }
                                )),
                                this.floofModdingResponse(e, !0, "Mobs fetched successfully", o);
                                break;
                            case "getPetalInfo":
                                if (1 !== r.length)
                                    return void this.floofModdingResponse(e, !1, "getPetalInfo(index) requires 1 argument!");
                                if (!this.validateArg(e, "index", r[0], "number", [0, n.GJ.length - 1]))
                                    return;
                                this.floofModdingResponse(e, !0, "Petal info fetched successfully", n.GJ[r[0]], u.TRANSFERRABLE_TYPES.PetalConfig);
                                break;
                            case "createCustomPetal":
                                {
                                    if (1 !== r.length)
                                        return void this.floofModdingResponse(e, !1, "createCustomPetal(options) requires 1 argument!");
                                    const t = r[0];
                                    t.drawing && (t.drawing = a.H1.fromString(t.drawing)),
                                    t.id = n.GJ.length,
                                    n.GJ.push(u.assignTransferrableType(t, u.TRANSFERRABLE_TYPES.PetalConfig)),
                                    m(),
                                    this.floofModdingResponse(e, !0, "Custom petal created successfully", t, u.TRANSFERRABLE_TYPES.PetalConfig)
                                }
                                break;
                            case "editPetal":
                                {
                                    if (1 !== r.length)
                                        return void this.floofModdingResponse(e, !1, "editPetal(options) requires 1 argument!");
                                    if (null == n.GJ[r[0].id])
                                        return void this.floofModdingResponse(e, !1, "Petal does not exist");
                                    const t = r[0];
                                    t.drawing && (t.drawing = a.H1.fromString(t.drawing)),
                                    n.GJ[t.id] = u.assignTransferrableType(t, u.TRANSFERRABLE_TYPES.PetalConfig),
                                    m(),
                                    s.A.entities.forEach((e => {
                                        if (e.type !== a.wv.PLAYER)
                                            return;
                                        e.petalSlots.forEach((e => {
                                            e.config.id === t.id && (e.destroy(),
                                            e.define(n.GJ[t.id], e.rarity))
                                        }
                                        ))
                                    }
                                    )),
                                    this.floofModdingResponse(e, !0, "Petal edited successfully", t, u.TRANSFERRABLE_TYPES.PetalConfig)
                                }
                                break;
                            case "setSlot":
                                {
                                    if (4 !== r.length)
                                        return void this.floofModdingResponse(e, !1, "setSlot(clientID, slotID, index, rarity) requires 4 arguments!");
                                    if (!(this.validateArg(e, "clientID", r[0], "number") && this.validateArg(e, "slotID", r[1], "number") && this.validateArg(e, "index", r[2], "number", [0, n.GJ.length - 1]) && this.validateArg(e, "rarity", r[3], "number", [0, n.cK.length - 1])))
                                        return;
                                    const t = s.A.clients.get(r[0]);
                                    if (!t)
                                        return void this.floofModdingResponse(e, !1, "Client not found. Try to fetch the players and find the client ID you need");
                                    if (!t.body)
                                        return void this.floofModdingResponse(e, !1, "Client does not have a body");
                                    if (r[1] < 0 || r[1] >= t.body.petalSlots.length)
                                        return void this.floofModdingResponse(e, !1, `Slot ${r[1]} does not exist`);
                                    t.slots[r[1]].id = r[2],
                                    t.slots[r[1]].rarity = r[3],
                                    t.body.setSlot(r[1], r[2], r[3]),
                                    this.floofModdingResponse(e, !0, "Slot set successfully", {
                                        clientID: t.id,
                                        slotIndex: r[1],
                                        petalIndex: r[2],
                                        rarity: r[3],
                                        indexName: n.GJ[r[2]].name,
                                        rarityName: n.cK[r[3]].name
                                    })
                                }
                                break;
                            case "deletePetal":
                                if (1 !== r.length)
                                    return void this.floofModdingResponse(e, !1, "deletePetal(index) requires 1 argument!");
                                if (!this.validateArg(e, "index", r[0], "number", [0, n.GJ.length - 1]))
                                    return;
                                r[0] < n.vx ? n.GJ[r[0]] = new n.lm("Deleted Petal",0,0,0) : n.GJ.splice(r[0], 1);
                                for (let t = 0; t < n.GJ.length; t++)
                                    n.GJ[t].id = t;
                                n.lm.idAccumulator = n.GJ.length,
                                s.A.entities.forEach((t => {
                                    if (t.type !== a.wv.PLAYER)
                                        return;
                                    t.petalSlots.forEach((t => {
                                        t.config.id === r[0] && (t.destroy(),
                                        t.define(n.GJ[0], t.rarity))
                                    }
                                    ))
                                }
                                )),
                                m(),
                                this.floofModdingResponse(e, !0, "Petal deleted successfully", {
                                    index: r[0]
                                });
                                break;
                            case "setSlotAmount":
                                {
                                    if (2 !== r.length)
                                        return void this.floofModdingResponse(e, !1, "setSlotAmount(clientID, amount) requires 2 arguments!");
                                    if (!this.validateArg(e, "clientID", r[0], "number") || !this.validateArg(e, "amount", r[1], "number", [1, 10]))
                                        return;
                                    const t = s.A.clients.get(r[0]);
                                    if (!t)
                                        return void this.floofModdingResponse(e, !1, "Client not found. Try to fetch the players and find the client ID you need");
                                    if (!t.body)
                                        return void this.floofModdingResponse(e, !1, "Client does not have a body");
                                    t.body.initSlots(r[1]),
                                    this.floofModdingResponse(e, !0, "Slot amount set successfully", {
                                        clientID: t.id,
                                        body: {
                                            id: t.body.id,
                                            slots: t.body.petalSlots.map((t => ({
                                                index: t.index,
                                                rarity: t.rarity,
                                                indexName: n.GJ[t.index].name,
                                                rarityName: n.cK[t.rarity].name
                                            }))),
                                            position: {
                                                x: t.body.x,
                                                y: t.body.y
                                            }
                                        }
                                    })
                                }
                                break;
                            case "spawnAIPlayer":
                                {
                                    if (2 !== r.length)
                                        return void this.floofModdingResponse(e, !1, "spawnAIPlayer(rarity, level) requires 2 arguments!");
                                    if (!this.validateArg(e, "rarity", r[0], "number", [0, n.cK.length - 1]) || !this.validateArg(e, "amount", r[1] - 1, "number", [1, 999]))
                                        return;
                                    const t = new h.cS(s.A.random(),r[0],r[1] - 1);
                                    this.floofModdingResponse(e, !0, "AI Flower spawned successfully", {
                                        id: t.id,
                                        level: t.client.level,
                                        highestRarity: t.client.highestRarity,
                                        position: {
                                            x: t.x,
                                            y: t.y
                                        }
                                    })
                                }
                            default:
                                this.floofModdingResponse(e, !1, `Function ${i} does not exist!`)
                            }
                        }
                    }
                    e()
                } catch (S) {
                    e(S)
                }
            }
            ), 1)
        }
        ,
        110: (t, e, i) => {
            i.d(e, {
                AU: () => M,
                DQ: () => m,
                E4: () => R,
                F6: () => c,
                Gf: () => S,
                H1: () => w,
                LX: () => P,
                VC: () => f,
                XE: () => o,
                ai: () => T,
                cK: () => s,
                dX: () => D,
                de: () => l,
                fh: () => d,
                hg: () => A,
                jU: () => u,
                lm: () => h,
                mP: () => b,
                rx: () => n,
                so: () => p,
                w6: () => g,
                wv: () => y,
                z: () => a
            });
            const s = [{
                name: "Common",
                color: "#7EEF6D"
            }, {
                name: "Uncommon",
                color: "#FFE65D"
            }, {
                name: "Rare",
                color: "#455FCF"
            }, {
                name: "Epic",
                color: "#7633CB"
            }, {
                name: "Legendary",
                color: "#C13328"
            }, {
                name: "Mythic",
                color: "#1ED2CB"
            }, {
                name: "Ultra",
                color: "#ff2b75"
            }, {
                name: "Super",
                color: "#2affa3"
            }, {
                name: "Unique",
                color: "#000000"
            }, {
                name: "Eternal",
                color: "#FFFFFF"
            }];
            class a {
                static HEALTH_SCALE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 6561];
                static DAMAGE_SCALE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 6561];
                static HEAL_SCALE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 6561];
                static NORMAL_SCALE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 6561];
                constructor(t, e, i) {
                    this.health = e * a.HEALTH_SCALE[t],
                    this.damage = i * a.DAMAGE_SCALE[t],
                    this.extraHealth = 0,
                    this.constantHeal = 0,
                    this.healing = 0,
                    this.count = 1,
                    this.clumps = !1,
                    this.damageReduction = 0,
                    this.damageReflection = null,
                    this.speedMultiplier = 1,
                    this.extraSize = 0,
                    this.extraRange = 0,
                    this.poison = null,
                    this.spawnable = null,
                    this.pentagramAbility = null,
                    this.lightning = null,
                    this.extraVision = 0,
                    this.extraPickupRange = 0,
                    this.density = 1,
                    this.deathDefying = null,
                    this.absorbsDamage = null,
                    this.shield = 0,
                    this.boost = null,
                    this.healBack = 0,
                    this.armor = 0,
                    this.icon = null,
                    this.description = "Not much is known about this mysterious petal."
                }
            }
            class n {
                static HEALTH_SCALE = [1, 3.75, 13.5, 54, 324, 3159, 145800, 4374000, 26244000, 31722000];
                static DAMAGE_SCALE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 6561];
                static PROJ_DAMAGE_SCALE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 6561];
                static PROJ_HEALTH_SCALE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 6561];
                static HEAL_SCALE = [1, 3, 9, 27, 81, 243, 324, 486, 972, 1944, 1944];
                static NORMAL_SCALE = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 6561];
                static SIZE_SCALE = 1.235;
                constructor(t, e, i, s) {
                    this.health = e * n.HEALTH_SCALE[t],
                    this.damage = i * n.DAMAGE_SCALE[t],
                    this.size = s * Math.pow(n.SIZE_SCALE, t),
                    this.damageReduction = 0,
                    this.projectile = null,
                    this.poison = null,
                    this.lightning = null,
                    this.antHoleSpawns = null
                }
            }
            class h {
                static idAccumulator = 0;
                #e() {
                    const t = [];
                    for (let e = 0; e < s.length; e++)
                        t.push(new a(e,this.health,this.damage));
                    return t
                }
                constructor(t, e, i, s) {
                    this.id = h.idAccumulator++,
                    this.name = t,
                    this.cooldown = e,
                    this.health = i,
                    this.damage = s,
                    this.sizeRatio = 1,
                    this.launchable = !1,
                    this.launchedSpeed = 0,
                    this.launchedRange = 0,
                    this.wingMovement = !1,
                    this.yinYangMovement = !1,
                    this.wearable = !1,
                    this.enemySpeedDebuff = null,
                    this.splits = null,
                    this.tiers = this.#e(),
                    this.attractsLightning = !1,
                    this.drawing = null,
                    this.shootsOut = -1,
                    this.healsInDefense = !1,
                    this.phases = !1,
                    this.canPlaceDown = !1,
                    this.healWhenUnder = 1,
                    this.huddles = !1,
                    this.ignoreWalls = !1,
                    this.extraLighting = 0
                }
                setName(t) {
                    return this.name = t,
                    this
                }
                setHuddles(t) {
                    return this.huddles = Boolean(t),
                    this
                }
                setCooldown(t) {
                    return this.cooldown = t,
                    this
                }
                setHealth(t) {
                    this.health = t;
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].health = t * a.HEALTH_SCALE[e];
                    return this
                }
                setDamage(t) {
                    this.damage = t;
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].damage = t * a.DAMAGE_SCALE[e]
                    return this
                }
                setSize(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].sizeRatio = t instanceof Array ? t[e] ?? t[t.length - 1] : t;
                    return this
                }
                setMulti(t, e, i=!1) {
                    for (let s = 0; s < this.tiers.length; s++) {
                        let a = t instanceof Array ? t[s] ?? t[t.length - 1] : t;
                        this.tiers[s].count = a,
                        this.tiers[s].clumps = Boolean(e),
                        i && (this.damage /= a,
                        this.tiers[s].damage /= a)
                    }
                    return this
                }
                setDrawing(t) {
                    if (!(t instanceof w))
                        throw new Error("Invalid drawing type");
                    return this.drawing = t,
                    this
                }
                setExtraRadians(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].extraRadians = t * Math.pow(1.15, e);
                    return this
                }
                setExtraHealth(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].extraHealth = t * a.NORMAL_SCALE[e];
                    return this
                }
                setConstantHeal(t, e=!1, i=1) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].constantHeal = t / 22.5 * a.HEAL_SCALE[e];
                    return this.healsInDefense = e,
                    this.healWhenUnder = i,
                    this
                }
                setWingMovement(t) {
                    return this.wingMovement = t,
                    this
                }
                setDamageReduction(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].damageReduction = t * Math.pow(1.1, e);
                    return this
                }
                setSpeedMultiplier(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].speedMultiplier = Math.pow(t, 1 + e / 2.25);
                    return this
                }
                setExtraSize(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].extraSize = t + Math.pow(1.5, e);
                    return this
                }
                setDescription(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].description = t instanceof Array ? t[e] ?? t[t.length - 1] : t;
                    return this
                }
                setLaunchable(t, e) {
                    return this.launchable = !0,
                    this.launchedSpeed = t,
                    this.launchedRange = e,
                    this
                }
                setHealing(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].healing = t * a.HEAL_SCALE[e];
                    return this
                }
                setYinYang(t) {
                    return this.yinYangMovement = t,
                    this
                }
                setEnemySpeedMultiplier(t, e) {
                    return this.enemySpeedDebuff = {
                        speedMultiplier: t,
                        duration: 22.5 * e
                    },
                    this
                }
                setPoison(t, e) {
                    for (let i = 0; i < this.tiers.length; i++)
                        this.tiers[i].poison = {
                            damage: t * a.DAMAGE_SCALE[i] / 22.5,
                            duration: 22.5 * e
                        };
                    return this
                }
                setShootOut(t) {
                    return this.shootsOut = t,
                    this
                }
                setExtraRange(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].extraRange = t * Math.pow(1.15, e);
                    return this
                }
                setWearable(t) {
                    return this.wearable = t,
                    this
                }
                setSpawnable(t, e, i) {
                    for (let s = 0; s < this.tiers.length; s++)
                        this.tiers[s].spawnable = {
                            index: t,
                            rarity: e instanceof Array ? e[s] ?? e[e.length - 1] : e,
                            timer: 22.5 * i
                        };
                    return this
                }
                setExtraVision(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].extraVision = t * Math.pow(1.45, e);
                    return this
                }
                setSplits(t, e) {
                    return this.splits = {
                        index: t,
                        count: e
                    },
                    this
                }
                setHealSpit(t, e, i) {
                    return this.healSpit = {
                        cooldown: t,
                        range: e,
                        heal: i
                    },
                    this
                }
                setPentagramAbility(t, e, i, s, n) {
                    for (let h = 0; h < this.tiers.length; h++)
                        this.tiers[h].pentagramAbility = {
                            cooldown: t,
                            range: e * Math.pow(1.15, h),
                            damage: i * a.DAMAGE_SCALE[h],
                            poison: {
                                damage: s.damage / 22.5 * a.DAMAGE_SCALE[h],
                                duration: 22.5 * s.duration * Math.pow(1.1, h)
                            },
                            speedDebuff: {
                                multiplier: n.multiplier,
                                duration: 22.5 * n.duration * Math.pow(1.1, h)
                            }
                        };
                    return this
                }
                setLightning(t, e, i, s=1, n=!1) {
                    for (let h = 0; h < this.tiers.length; h++)
                        this.tiers[h].lightning = {
                            bounces: t instanceof Array ? t[h] ?? t[t.length - 1] : t,
                            range: e * Math.pow(1.15, h),
                            damage: i * a.DAMAGE_SCALE[h],
                            charges: s instanceof Array ? s[h] ?? s[s.length - 1] : s,
                            lightningOnParentHit: n
                        };
                    return this
                }
                setExtraPickupRange(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].extraPickupRange = t * Math.pow(1.35, e);
                    return this
                }
                setDamageReflection(t, e=0) {
                    for (let i = 0; i < this.tiers.length; i++)
                        this.tiers[i].damageReflection = {
                            reflection: t * Math.pow(4 / 3, i),
                            cap: e * Math.pow(1.05, i)
                        };
                    return this
                }
                setAttractsLightning(t) {
                    return this.attractsLightning = t,
                    this
                }
                setDensity(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].density = t * Math.pow(1.25, e);
                    return this
                }
                setDeathDefying(t, e) {
                    for (let i = 0; i < this.tiers.length; i++)
                        this.tiers[i].deathDefying = {
                            health: Math.min(1, t * Math.pow(1.1883, i)),
                            duration: 1.5 + i * e
                        };
                    return this
                }
                setPhases(t) {
                    return this.phases = Boolean(t),
                    this
                }
                setAbsorbsDamage(t, e) {
                    for (let i = 0; i < this.tiers.length; i++)
                        this.tiers[i].absorbsDamage = {
                            maxDamage: t instanceof Array ? t[i] ?? t[t.length - 1] : t * a.DAMAGE_SCALE[i],
                            period: e instanceof Array ? e[i] ?? e[e.length - 1] : e
                        };
                    return this
                }
                setPlaceDown(t) {
                    return this.canPlaceDown = Boolean(t),
                    this
                }
                setShield(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].shield = t instanceof Array ? t[e] ?? t[t.length - 1] : t * a.HEAL_SCALE[e];
                    return this
                }
                setBoost(t, e) {
                    for (let i = 0; i < this.tiers.length; i++)
                        this.tiers[i].boost = {
                            length: t instanceof Array ? t[i] ?? t[t.length - 1] : t,
                            delay: e instanceof Array ? e[i] ?? e[e.length - 1] : e
                        };
                    return this
                }
                setHealBack(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].healBack = t instanceof Array ? t[e] ?? t[t.length - 1] : t;
                    return this
                }
                setAttractsAggro(t) {
                    return this.attractsAggro = Boolean(t),
                    this
                }
                setIgnoreWalls(t) {
                    return this.ignoreWalls = Boolean(t),
                    this
                }
                setLighting(t) {
                    return this.extraLighting = t,
                    this
                }
                setExtraDamage(t, e, i) {
                    return this.extraDamage = {
                        minHp: t,
                        maxHp: e,
                        multiplier: i
                    },
                    this
                }
                setArmor(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].armor = t * a.DAMAGE_SCALE[e];
                    return this
                }
                setIcon(t, e, i, s) {
                    for (let a = 0; a < this.tiers.length; a++) {
                        let n = e instanceof Array ? e[a] ?? e[e.length - 1] : e;
                        this.tiers[a].icon = {
                            size: t,
                            count: n,
                            name: i,
                            rotation: s * Math.PI / 180
                        }
                    }
                    return this
                }
            }
            class r {
                index = 0;
                minRarity = 0;
                chance = 1
            }
            class o {
                static idAccumulator = 0;
                #e() {
                    const t = [];
                    for (let e = 0; e < s.length; e++)
                        t.push(new n(e,this.health,this.damage,this.size));
                    return t
                }
                constructor(t, e, i, s, a) {
                    this.id = o.idAccumulator++,
                    this.name = t,
                    this.health = e,
                    this.damage = i,
                    this.size = s,
                    this.speed = a,
                    this.aggressive = !1,
                    this.neutral = !1,
                    this.spawnable = !0,
                    this.sandstormMovement = !1,
                    this.damageReflection = {
                        reflection: 0,
                        cap: 0
                    },
                    this.tiers = this.#e(),
                    this.drops = [],
                    this.drawing = null,
                    this.hatchables = null,
                    this.poopable = null,
                    this.isSystem = !1,
                    this.movesInBursts = !1,
                    this.moveInSines = !1,
                    this.pushability = 1,
                    this.sizeRand = {
                        min: 1,
                        max: 0
                    },
                    this.wavesIconSize = 3.5
                }
                setSystem(t) {
                    return this.isSystem = Boolean(t),
                    this
                }
                setMovesInBursts(t) {
                    return this.movesInBursts = Boolean(t),
                    this
                }
                setAggressive(t) {
                    return this.aggressive = Boolean(t),
                    this
                }
                setNeutral(t) {
                    return this.neutral = Boolean(t),
                    this
                }
                setSandstormMovement(t) {
                    return this.sandstormMovement = Boolean(t),
                    this
                }
                setCentipedeMovement(t) {
                    return this.centipedeMovement = Boolean(t),
                    this
                }
                setBumblebeeMovement(t) {
                    return this.bumblebeeMovement = Boolean(t),
                    this
                }
                setDesertCentipedeMovement(t) {
                    return this.desertCentipedeMovement = Boolean(t),
                    this
                }
                setDamageReduction(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].damageReduction = t * Math.pow(1.1, e);
                    return this
                }
                setDamageReflection(t, e=0) {
                    return this.damageReflection = {
                        reflection: t,
                        cap: e
                    },
                    this
                }
                setArmor(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].armor = t * n.DAMAGE_SCALE[e];
                    return this
                }
                setProjectile(t={}) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].projectile = {
                            petalIndex: t.petalIndex ?? 0,
                            cooldown: t.cooldown ?? 10,
                            health: (t.health ?? 1) * n.PROJ_HEALTH_SCALE[e],
                            damage: (t.damage ?? 1) * n.PROJ_DAMAGE_SCALE[e],
                            speed: t.speed ?? 5,
                            range: (t.range ?? 50) * Math.pow(.8 * n.SIZE_SCALE, e),
                            size: t.size ?? .35,
                            multiShot: t.multiShot ?? null,
                            runs: t.runs ?? !1,
                            nullCollision: t.nullCollision ?? !1,
                            aimbot: t.aimbot ?? !1
                        };
                    return this
                }
                addDrop(t, e=1, i=0) {
                    if (t < 0 || t > 255)
                        throw new Error("Invalid drop index");
                    const s = new r;
                    return s.index = t,
                    s.minRarity = i,
                    s.chance = e,
                    this.drops.push(s),
                    this
                }
                setPoison(t, e) {
                    for (let i = 0; i < this.tiers.length; i++)
                        this.tiers[i].poison = {
                            damage: t * n.DAMAGE_SCALE[i] / 22.5,
                            duration: 22.5 * e
                        };
                    return this
                }
                setLightning(t, e, i, s) {
                    for (let nn = 0; nn < this.tiers.length; nn++)
                        this.tiers[nn].lightning = {
                            cooldown: t instanceof Array ? t[nn] ?? t[t.length - 1] : t,
                            bounces: e instanceof Array ? e[nn] ?? e[e.length - 1] : e,
                            range: i * Math.pow(1.15, nn),
                            damage: s * n.DAMAGE_SCALE[nn]
                        };
                    return this
                }
                setSize(t, e=n.SIZE_SCALE, i=1, s=0) {
                    this.size = t;
                    for (let r = 0; r < this.tiers.length; r++)
                        this.tiers[r].size = t * Math.pow(e, r);
                    return this.sizeRand = {
                        min: i,
                        max: s
                    },
                    this
                }
                setDrawing(t) {
                    if (!(t instanceof w))
                        throw new Error("Invalid drawing type");
                    return this.drawing = t,
                    this
                }
                setAntHoleSpawns(t) {
                    for (let e = 0; e < this.tiers.length; e++)
                        this.tiers[e].antHoleSpawns = t.map(( ({index: t, count: i, minHealthRatio: s}) => ({
                            index: t,
                            count: i instanceof Array ? i[e] ?? i[i.length - 1] : i,
                            minHealthRatio: s ?? 1
                        })));
                    return this
                }
                setHatchables(t) {
                    if (t instanceof Array) {
                        for (let e = 0; e < t.length; e++)
                            if (t[e].index < 0 || t[e].index > 255)
                                throw new Error("Invalid hatchable index");
                        this.hatchables = t
                    } else {
                        if (t.index < 0 || t.index > 255)
                            throw new Error("Invalid hatchable index");
                        this.hatchables = [t]
                    }
                    return this
                }
                setPoopable(t) {
                    if (t.index < 0 || t.index > 255)
                        throw new Error("Invalid poopable index");
                    return this.poopable = t,
                    this
                }
                segmentWith(t) {
                    return this.segment = t,
                    this
                }
                setMoveInSines(t) {
                    return this.moveInSines = Boolean(t),
                    this
                }
                setSpins(t, e=!1) {
                    return this.spins = {
                        rate: t,
                        constant: Boolean(e)
                    },
                    this
                }
                setFleeAtLowHealth(t) {
                    return this.fleeAtLowHealth = t,
                    this
                }
                setHealing(t=0) {
                    return this.healing = t,
                    this
                }
                setPushability(t) {
                    return this.pushability = t,
                    this
                }
                branchWith(t, e, i) {
                    return this.branch = {
                        index: t,
                        branches: e,
                        branchLength: i
                    },
                    this
                }
                setStrafes(t, e, i) {
                    return this.strafes = {
                        length: t,
                        cooldown: e,
                        speedMult: i
                    },
                    this
                }
                setWavesIconSize(t) {
                    return this.wavesIconSize = t,
                    this
                }
            }
            const l = {
                KICK: 0,
                READY: 1,
                MESSAGE: 2,
                WORLD_UPDATE: 3,
                DEATH: 4,
                ROOM_UPDATE: 5,
                UPDATE_ASSETS: 6,
                JSON_MESSAGE: 7,
                PONG: 8,
                TERRAIN: 9,
                CHAT_MESSAGE: 10
            }
              , d = {
                VERIFY: 0,
                SPAWN: 1,
                INPUTS: 2,
                CHANGE_LOADOUT: 3,
                DEV_CHEAT: 4,
                PING: 5,
                CHAT_MESSAGE: 6,
                INVENTORY_CHANGE_LOADOUT: 7
            }
              , c = {
                TELEPORT: 0,
                GODMODE: 1,
                CHANGE_TEAM: 2,
                SPAWN_MOB: 3,
                SET_PETAL: 4,
                SET_XP: 5,
                INFO_DUMP: 6
            }
              , g = {
                NEW: 0,
                DIE: 1,
                POSITION: 2,
                SIZE: 4,
                FACING: 8,
                FLAGS: 16,
                HEALTH: 32,
                DISPLAY: 64,
                ROPE_BODIES: 128
            }
              , p = {
                HIT: 1,
                POISON: 2,
                ATTACK: 4,
                DEFEND: 8,
                TDM: 16,
                FRIEND: 32,
                WEARABLES: 64
            }
              , m = {
                ANTENNAE: 1,
                THIRD_EYE: 2,
                CUTTER: 4,
                AMULET: 8,
                AIR: 16,
                ARMOR: 32
            }
              , u = {
                CLOSE_CLIENT: 0,
                PIPE_PACKET: 1,
                ANALYTICS_DATA: 3
            }
              , y = {
                STANDARD: 0,
                PLAYER: 1,
                PETAL: 2,
                MOB: 3,
                PROJECTILE: 4
            }
              , f = {
                DEFAULT: 0,
                GARDEN: 1,
                DESERT: 2,
                OCEAN: 3,
                ANT_HELL: 4,
                HELL: 5,
                SEWERS: 6,
                DARK_FOREST: 7,
                HALLOWEEN: 8
            }
              , A = {
                [f.DEFAULT]: {
                    name: "Default",
                    color: "#718083",
                    tile: "tiles/allMobs.svg"
                },
                [f.GARDEN]: {
                    name: "Garden",
                    color: "#1EA660",
                    tile: "tiles/garden.svg"
                },
                [f.DESERT]: {
                    name: "Desert",
                    color: "#ECDCB8",
                    tile: "tiles/desert.svg"
                },
                [f.OCEAN]: {
                    name: "Ocean",
                    color: "#6D96BE",
                    tile: "tiles/ocean.svg",
                    alt: "tiles/oceanAlt.svg"
                },
                [f.ANT_HELL]: {
                    name: "Ant Hell",
                    color: "#8E603F",
                    tile: "tiles/antHell.svg"
                },
                [f.HELL]: {
                    name: "Hell",
                    color: "#973332",
                    tile: "tiles/hell.svg"
                },
                [f.SEWERS]: {
                    name: "Sewers",
                    color: "#676733",
                    tile: "tiles/sewer.svg"
                },
                [f.DARK_FOREST]: {
                    name: "Dark Forest",
                    color: "#2C5037",
                    tile: "tiles/forest.svg"
                },
                [f.HALLOWEEN]: {
                    name: "Halloween",
                    color: "#CF5704",
                    tile: "tiles/pumpkin.svg"
                }
            };
            class w {
                static actions = {
                    circle: [0, "x", "y", "radius"],
                    rect: [1, "x", "y", "width", "height"],
                    text: [2, "x", "y", "size", "text"],
                    line: [3, "x1", "y1", "x2", "y2"],
                    arc: [4, "x", "y", "radius", "startAngle", "endAngle"],
                    beginPath: [5],
                    closePath: [6],
                    moveTo: [7, "x", "y"],
                    lineTo: [8, "x", "y"],
                    stroke: [9, "color", "lineWidth", "strokeDarkness"],
                    fill: [10, "color"],
                    paint: [11, "color", "lineWidth", "strokeDarkness"],
                    polygon: [12, "sides", "radius", "rotation"],
                    spikeBall: [13, "sides", "radius", "rotation"],
                    dipPolygon: [14, "sides", "radius", "dipMult", "rotation"],
                    opacity: [15, "opacity"],
                    blur: [16, "color", "strength"],
                    noBlur: [17],
                    ellipse: [18, "x", "y", "radiusX", "radiusY", "rotation"],
                    quadraticCurveTo: [19, "cx", "cy", "x", "y"],
                    bezierCurveTo: [20, "cx1", "cy1", "cx2", "cy2", "x", "y"],
                    rotate: [21, "degrees"]
                };
                static reverseActions = Object.fromEntries(Object.keys(w.actions).map((t => [w.actions[t][0], t])));
                static fromString(t) {
                    const e = new w;
                    return e.actions = t.split(";").map((t => {
                        const [e,...i] = t.split(",").map((t => {
                            if ("" === t)
                                return;
                            if ("#" === t[0])
                                return t;
                            if ("string" == typeof t && ("date" === t || t.startsWith("date_")))
                                return t;
                            const e = parseFloat(t);
                            return isNaN(e) ? t : e
                        }
                        ));
                        return [e, ...i]
                    }
                    )),
                    e
                }
                constructor() {
                    this.actions = []
                }
                addAction(t, ...e) {
                    const i = w.actions[t];
                    if (!i)
                        throw new Error(`Unknown action: ${t}`);
                    if (e.length !== i.length - 1)
                        throw new Error(`Invalid number of arguments for action ${t}, please provide ${i.slice(1).join(", ")}`);
                    return this.actions.push([i[0], ...e]),
                    this
                }
                getActions(t) {
                    return this.actions.filter((e => e[0] === w.actions[t][0]))
                }
                toString() {
                    return this.actions.map((t => t.join(","))).join(";")
                }
            }
            class b {
                constructor(t, e, i) {
                    this.reader = !0,
                    this._e = i,
                    t && this.repurpose(t, e)
                }
                repurpose(t, e) {
                    this.view = t,
                    this._o = e || 0
                }
                getUint8() {
                    return this.view.getUint8(this._o++, this._e)
                }
                getInt8() {
                    return this.view.getInt8(this._o++, this._e)
                }
                getUint16() {
                    return this.view.getUint16((this._o += 2) - 2, this._e)
                }
                getInt16() {
                    return this.view.getInt16((this._o += 2) - 2, this._e)
                }
                getUint32() {
                    return this.view.getUint32((this._o += 4) - 4, this._e)
                }
                getInt32() {
                    return this.view.getInt32((this._o += 4) - 4, this._e)
                }
                getFloat32() {
                    return this.view.getFloat32((this._o += 4) - 4, this._e)
                }
                getFloat64() {
                    return this.view.getFloat64((this._o += 8) - 8, this._e)
                }
                getStringUTF8() {
                    let t, e = "";
                    for (; 0 !== (t = this.view.getUint8(this._o++)); )
                        e += String.fromCharCode(t);
                    return decodeURIComponent(escape(e))
                }
            }
            class M {
                constructor(t) {
                    return this.writer = !0,
                    this.tmpBuf = new DataView(new ArrayBuffer(8)),
                    this._e = t,
                    this.reset(),
                    this
                }
                reset(t=this._e) {
                    this._e = t,
                    this._b = [],
                    this._o = 0
                }
                setUint8(t) {
                    return t >= 0 && t < 256 && this._b.push(t),
                    this
                }
                setInt8(t) {
                    return t >= -128 && t < 128 && this._b.push(t),
                    this
                }
                setUint16(t) {
                    return this.tmpBuf.setUint16(0, t, this._e),
                    this._move(2),
                    this
                }
                setInt16(t) {
                    return this.tmpBuf.setInt16(0, t, this._e),
                    this._move(2),
                    this
                }
                setUint32(t) {
                    return this.tmpBuf.setUint32(0, t, this._e),
                    this._move(4),
                    this
                }
                setInt32(t) {
                    return this.tmpBuf.setInt32(0, t, this._e),
                    this._move(4),
                    this
                }
                setFloat32(t) {
                    return this.tmpBuf.setFloat32(0, t, this._e),
                    this._move(4),
                    this
                }
                setFloat64(t) {
                    return this.tmpBuf.setFloat64(0, t, this._e),
                    this._move(8),
                    this
                }
                _move(t) {
                    for (let e = 0; e < t; e++)
                        this._b.push(this.tmpBuf.getUint8(e))
                }
                setStringUTF8(t) {
                    const e = unescape(encodeURIComponent(t));
                    for (let t = 0, i = e.length; t < i; t++)
                        this._b.push(e.charCodeAt(t));
                    return this._b.push(0),
                    this
                }
                build() {
                    return new Uint8Array(this._b)
                }
            }
            function v(t) {
                const e = [t.id, t.name, t.cooldown, 0]
                  , i = e.length - 1;
                return 0 !== t.tiers[0].extraHealth && (e[i] |= 1),
                0 !== t.tiers[0].constantHeal && (e[i] |= 2),
                t.tiers.some((t => t.count > 1)) && (e[i] |= 4),
                0 !== t.tiers[0].damageReduction && (e[i] |= 8),
                1 !== t.tiers[0].speedMultiplier && (e[i] |= 16),
                0 !== t.tiers[0].extraSize && (e[i] |= 32),
                0 !== t.tiers[0].healing && (e[i] |= 64),
                t.tiers[0].extraRadians > 0 && (e[i] |= 128),
                t.tiers[0].poison && (e[i] |= 1024),
                t.tiers[0].extraRange > 0 && (e[i] |= 2048),
                t.tiers[0].spawnable && (e[i] |= 8192),
                (t.tiers[0].extraVision > 0 || t.tiers[0].extraVision < 0) && (e[i] |= 16384),
                t.tiers[0].pentagramAbility && (e[i] |= 32768),
                t.tiers[0].lightning && (e[i] |= 65536),
                t.tiers[0].extraPickupRange > 0 && (e[i] |= 131072),
                t.healSpit?.heal > 0 && (e[i] |= 262144),
                null !== t.tiers[0].damageReflection && (e[i] |= 524288),
                1 !== t.tiers[0].density && (e[i] |= 1048576),
                null !== t.tiers[0].deathDefying && (e[i] |= 2097152),
                t.tiers[0].absorbsDamage && (e[i] |= 4194304),
                t.tiers[0].shield > 0 && (e[i] |= 8388608),
                null !== t.tiers[0].boost && (e[i] |= 16777216),
                (t.tiers[0].healBack > 0 || t.tiers[0].healBack < 0) && (e[i] |= 67108864),
                t.extraLighting > 0 && (e[i] |= 134217728),
                0 !== t.tiers[0].armor && (e[i] |= 536870912),
                null !== t.tiers[0].icon && (e[i] |= 2147483648),
                e.push(...t.tiers.flatMap(( (s, n) => {
                    const h = [s.health, s.damage, s.description];
                    return 1 & e[i] && h.push(s.extraHealth),
                    2 & e[i] && h.push(s.constantHeal),
                    4 & e[i] && h.push(s.count),
                    8 & e[i] && h.push(s.damageReduction),
                    16 & e[i] && h.push(s.speedMultiplier),
                    32 & e[i] && h.push(s.extraSize),
                    64 & e[i] && h.push(s.healing),
                    128 & e[i] && h.push(s.extraRadians),
                    1024 & e[i] && h.push(s.poison.damage, s.poison.duration / 22.5),
                    2048 & e[i] && h.push(s.extraRange),
                    8192 & e[i] && h.push(s.spawnable.index, s.spawnable.rarity, s.spawnable.timer),
                    16384 & e[i] && h.push(s.extraVision),
                    32768 & e[i] && h.push(s.pentagramAbility.cooldown, s.pentagramAbility.range, s.pentagramAbility.damage, s.pentagramAbility.poison.damage, s.pentagramAbility.poison.duration, s.pentagramAbility.speedDebuff.multiplier, s.pentagramAbility.speedDebuff.duration),
                    65536 & e[i] && h.push(s.lightning.bounces, s.lightning.range, s.lightning.damage, s.lightning.charges),
                    131072 & e[i] && h.push(s.extraPickupRange),
                    262144 & e[i] && h.push(t.healSpit.heal * a.HEALTH_SCALE[n]),
                    524288 & e[i] && h.push(s.damageReflection.reflection, s.damageReflection.cap),
                    1048576 & e[i] && h.push(s.density),
                    2097152 & e[i] && h.push(s.deathDefying.health, s.deathDefying.duration),
                    4194304 & e[i] && h.push(s.absorbsDamage.maxDamage, s.absorbsDamage.period / 22.5),
                    8388608 & e[i] && h.push(s.shield),
                    16777216 & e[i] && h.push(s.boost.length, s.boost.delay / 22.5),
                    67108864 & e[i] && h.push(s.healBack),
                    536870912 & e[i] && h.push(s.armor),
                    2147483648 & e[i] && h.push(s.icon.size, s.icon.count, s.icon.name, s.icon.rotation),
                    h
                }
                ))),
                t.drawing?.toString().length > 0 && (e[i] |= 256,
                e.push(t.drawing.toString())),
                t.enemySpeedDebuff && (e[i] |= 512,
                e.push(t.enemySpeedDebuff.speedMultiplier, t.enemySpeedDebuff.duration)),
                t.wearable && (e[i] |= 4096),
                t.healWhenUnder < 1 && (e[i] |= 33554432,
                e.push(t.healWhenUnder)),
                134217728 & e[i] && e.push(t.extraLighting),
                t.extraDamage && (e[i] |= 268435456,
                e.push(t.extraDamage.minHp, t.extraDamage.maxHp, t.extraDamage.multiplier)),
                t.splits && (e[i] |= 1073741824,
                e.push(t.splits.count)),
                e.map((t => Number.isFinite(t) ? +t.toFixed(2) : t))
            }
            function x(t) {
                const e = [t.id, t.name, +t.isSystem, t.drops, 0]
                  , i = e.length - 1;
                return 0 !== t.tiers[0].damageReduction && (e[i] |= 1),
                t.tiers[0].poison && (e[i] |= 2),
                t.tiers[0].lightning && (e[i] |= 4),
                t.damageReflection && (e[i] |= 8),
                0 !== t.tiers[0].armor && (e[i] |= 16),
                t.healing && (e[i] |= 32),
                t.tiers[0].projectile && (e[i] |= 64),
                t.wavesIconSize && (e[i] |= 256),
                e.push(...t.tiers.flatMap(( (t, s) => {
                    const a = [t.health, t.damage];
                    return 1 & e[i] && a.push(t.damageReduction),
                    2 & e[i] && a.push(t.poison.damage, t.poison.duration / 22.5),
                    4 & e[i] && a.push(t.lightning.damage),
                    16 & e[i] && a.push(t.armor),
                    64 & e[i] && a.push(t.projectile.health, t.projectile.damage, t.projectile.petalIndex, t.projectile.range),
                    a
                }
                ))),
                8 & e[i] && e.push(t.damageReflection.reflection, t.damageReflection.cap),
                32 & e[i] && e.push(t.healing),
                t.drawing?.toString().length > 0 && (e[i] |= 128,
                e.push(t.drawing.toString())),
                256 & e[i] && e.push(t.wavesIconSize),
                e.map((t => Number.isFinite(t) ? +t.toFixed(2) : t))
            }
            function S(t, e, i) {
                const s = [t.length, ...t.flatMap((t => [t.name, t.color]))];
                return s.push(...function(t) {
                    const e = [t.length];
                    for (const i of t) {
                        const t = v(i);
                        e.push(...t)
                    }
                    return e
                }(e)),
                s.push(...function(t) {
                    const e = [t.length];
                    for (const i of t) {
                        const t = x(i);
                        e.push(...t)
                    }
                    return e
                }(i)),
                s
            }
            const E = {};
            async function D() {
                const t = await fetch("/assets/terrains.json")
                  , e = await t.json();
                Object.assign(E, e)
            }
            const R = {
                TOP: 1,
                RIGHT: 2,
                BOTTOM: 4,
                LEFT: 8
            };
            function T(t) {
                const e = E[t];
                if (!e)
                    return {
                        id: [0, 0],
                        terrain: E[0][0]
                    };
                const i = Math.random() * e.length | 0;
                return {
                    id: [t, i],
                    terrain: e[i]
                }
            }
            const P = {
                FFA: 0,
                TDM: 1,
                WAVES: 2,
                LINE: 3,
                MAZE: 4
            }
        }
        ,
        111: (t, e, i) => {
            i.d(e, {
                A: () => B
            });
            var s = i(110)
              , a = i(512)
              , n = i(904)
              , h = i(446)
              , r = i(874);
            const o = [];
            fetch("/profanity.txt").then((t => t.text())).then((t => {
                o.push(...t.replaceAll("\r", "").split("\n").map((t => t.trim()))),
                console.log("Profanity list loaded", o.length, "words")
            }
            ));
            const DROP_AMOUNT_UPDATE = 250;
            const SUPABASE_URL = "https://xinjtolqjhbqzaupadbz.supabase.co";   // just go to project overview, then copy the URL there
            const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpbmp0b2xxamhicXphdXBhZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2NTAyNTcsImV4cCI6MjA5MzIyNjI1N30.5hkoaP5eCDiglz05dj7NLmNz-MJV_Qj8wgytF0dilNo";   // must use the anon public key!, if you dont know which go to project settings >  API keys, second page, and just click the Copy button
            const SB_AUTH = `${SUPABASE_URL}/auth/v1`;

            const sbRestHeaders = (token) => ({
            "Content-Type": "application/json",
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${token}`
            });

            // INVENTORY RAM OPTIMIZATION
            function inventoryToArray(inv) {
                if (!inv) return {};

                const result = {};

                for (const rarity in inv) {
                    const bucket = inv[rarity];
                    const arr = new Array(128);

                    for (const id in bucket) {
                        const i = Number(id);
                        arr[i] = bucket[id];
                    }

                    result[rarity] = arr;
                }

                return result;
            }

            function inventoryToObject(inv) {
                if (!inv) return {};

                const result = {};

                for (const rarity in inv) {
                    const arr = inv[rarity];
                    const obj = {};

                    if (Array.isArray(arr)) {
                        for (let i = 0; i < arr.length; i++) {
                            const val = arr[i];
                            if (val > 0) obj[i] = val;
                        }
                    } else {
                        Object.assign(obj, arr);
                    }

                    result[rarity] = obj;
                }

                return result;
            }

                //  Account storage (RAM only)
                const acc = {
                    ACCOUNTS: new Map()
                };

            const ONLINE_USERS = new Map();

            // REFRESH ACCESS TOKEN
            async function refreshAccessToken(client) {
                if (!client?.auth?.refreshToken) return false;

                try {
                    const res = await fetch(`${SB_AUTH}/token?grant_type=refresh_token`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "apikey": SUPABASE_KEY
                        },
                        body: JSON.stringify({
                            refresh_token: client.auth.refreshToken
                        })
                    });

                    const text = await res.text();

                    let data;
                    try {
                        data = JSON.parse(text);
                    } catch {
                        console.warn("[TOKEN REFRESH INVALID JSON]", client.auth.username, text);
                        return false;
                    }

                    if (!data || !data.access_token) {
                        console.warn("[TOKEN REFRESH FAILED]", client.auth.username, data);
                        return false;
                    }

                    client.auth.token = data.access_token;

                    if (data.refresh_token) {
                        client.auth.refreshToken = data.refresh_token;
                    }

                    return true;

                } catch (err) {
                    console.error("[TOKEN REFRESH ERROR]", client.auth.username, err);
                    return false;
                }
            }

            // ACCOUNT SAVE HELPER (DB version, password-safe)
            async function saveClientAccount(client) {
                client.systemMessage("Use /help for more info.")
                if (!client?.auth?.loggedIn) return;

                const refreshed = await refreshAccessToken(client);
                if (!refreshed) {
                    console.warn("[saveClientAccount] token refresh failed, skipping", client.auth.username);
                    return;
                }

                const account = { 
                    data: {
                        level: null,
                        xp: null,
                        slots: null,
                        secondarySlots: null,
                        inventory: null,
                        skills: null
                    }
                };


                account.data = {
                    level: client.level,
                    xp: client.xp,
                    slots: structuredClone(client.slots),
                    secondarySlots: structuredClone(client.secondarySlots),
                    inventory: inventoryToObject(client.inventory),
                    skills: structuredClone(client.skills)
                };

                try {
                    const res = await fetch(
                        `${SUPABASE_URL}/rest/v1/accounts?id=eq.${client.auth.userId}`,
                        {
                            method: "PATCH",
                            headers: {
                                ...sbRestHeaders(client.auth.token),
                                "Prefer": "return=representation"
                            },
                            body: JSON.stringify({ data: account.data , lastSaved: new Date().toISOString()})
                        }
                    );

                    const text = await res.text();

                    let data;
                    try {
                        data = text ? JSON.parse(text) : null;
                    } catch {
                        console.warn("[saveClientAccount] invalid JSON response", client.auth.username, text);
                        return;
                    }

                    if (!data || (Array.isArray(data) && data.length === 0)) {
                        console.warn(
                            "[saveClientAccount] no rows updated",
                            client.auth.username,
                            data
                        );
                        return;
                    }
                    client.systemMessage("Saved!")

                } catch (err) {
                    console.error("[saveClientAccount] fetch error", client.auth.username, err);
                }
            }

            // AUTOSAVE
            setInterval(() => {
                a.A.clients.forEach(client => {
                    if (!client?.auth?.loggedIn) return;

                    saveClientAccount(client); 
                });
            }, 6e4);
            const l = [/\b([sŚśṤṥŜŝŠšṦṧṠṡŞşṢṣṨṩȘșS̩s̩ꞨꞩⱾȿꟅʂᶊᵴ][a4ÁáÀàĂăẮắẰằẴẵẲẳÂâẤấẦầẪẫẨẩǍǎÅåǺǻÄäǞǟÃãȦȧǠǡĄąĄ́ą́Ą̃ą̃ĀāĀ̀ā̀ẢảȀȁA̋a̋ȂȃẠạẶặẬậḀḁȺⱥꞺꞻᶏẚＡａ][nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲŊŋꞐꞑꞤꞥᵰᶇɳȵꬻꬼИиПпＮｎ][dĎďḊḋḐḑD̦d̦ḌḍḒḓḎḏĐđÐðƉɖƊɗᵭᶁᶑȡ])*[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲŊŋꞐꞑꞤꞥᵰᶇɳȵꬻꬼИиПпＮｎ]+[iÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌoÓóÒòŎŏÔôỐốỒồỖỗỔổǑǒÖöȪȫŐőÕõṌṍṎṏȬȭȮȯO͘o͘ȰȱØøǾǿǪǫǬǭŌōṒṓṐṑỎỏȌȍȎȏƠơỚớỜờỠỡỞởỢợỌọỘộO̩o̩Ò̩ò̩Ó̩ó̩ƟɵꝊꝋꝌꝍⱺＯｏІіa4ÁáÀàĂăẮắẰằẴẵẲẳÂâẤấẦầẪẫẨẩǍǎÅåǺǻÄäǞǟÃãȦȧǠǡĄąĄ́ą́Ą̃ą̃ĀāĀ̀ā̀ẢảȀȁA̋a̋ȂȃẠạẶặẬậḀḁȺⱥꞺꞻᶏẚＡａ]*[gǴǵĞğĜĝǦǧĠġG̃g̃ĢģḠḡǤǥꞠꞡƓɠᶃꬶＧｇqꝖꝗꝘꝙɋʠ]+(l[e3ЄєЕеÉéÈèĔĕÊêẾếỀềỄễỂểÊ̄̄ê̄Ê̌êĚěËëẼẽĖėĖ́ė́Ė̃ė̃ȨȩḜḝĘęĘ́ę́Ę̃ę̃ĒēḖḗḔḕẺẻȄȅE̋e̋ȆȇẸẹỆệḘḙḚḛɆɇE̩e̩È̩è̩É̩é̩ᶒⱸꬴꬳＥｅ]+t+|[e3ЄєЕеÉéÈèĔĕÊêẾếỀềỄễỂểÊ̄ê̄Ê̌ê̌ĚěËëẼẽĖėĖ́ė́Ė̃ė̃ȨȩḜḝĘęĘ́ę́Ę̃ę̃ĒēḖḗḔḕẺẻȄȅE̋e̋ȆȇẸẹỆệḘḙḚḛɆɇE̩e̩È̩è̩É̩é̩ᶒⱸꬴꬳＥｅa4ÁáÀàĂăẮắẰằẴẵẲẳÂâẤấẦầẪẫẨẩǍǎÅåǺǻÄäǞǟÃãȦȧǠǡĄąĄ́ą́Ą̃ą̃ĀāĀ̀ā̀ẢảȀȁA̋a̋ȂȃẠạẶặẬậḀḁȺⱥꞺꞻᶏẚＡａ]*[rŔŕŘřṘṙŖŗȐȑȒȓṚṛṜṝṞṟR̃r̃ɌɍꞦꞧⱤɽᵲᶉꭉ]*|n[ÓóÒòŎŏÔôỐốỒồỖỗỔổǑǒÖöȪȫŐőÕõṌṍṎṏȬȭȮȯO͘o͘ȰȱØøǾǿǪǫǬǭŌōṒṓṐṑỎỏȌȍȎȏƠơỚớỜờỠỡỞởỢợỌọỘộO̩o̩Ò̩ò̩Ó̩ó̩ƟɵꝊꝋꝌꝍⱺＯｏ0]+[gǴǵĞğĜĝǦǧĠġG̃g̃ĢģḠḡǤǥꞠꞡƓɠᶃꬶＧｇqꝖꝗꝘꝙɋʠ]+|[a4ÁáÀàĂăẮắẰằẴẵẲẳÂâẤấẦầẪẫẨẩǍǎÅåǺǻÄäǞǟÃãȦȧǠǡĄąĄ́ą́Ą̃ą̃ĀāĀ̀ā̀ẢảȀȁA̋a̋ȂȃẠạẶặẬậḀḁȺⱥꞺꞻᶏẚＡａ]*)*[sŚśṤṥŜŝŠšṦṧṠṡŞşṢṣṨṩȘșS̩s̩ꞨꞩⱾȿꟅʂᶊᵴ]*\b/, /[fḞḟƑƒꞘꞙᵮᶂ]+[aÁáÀàĂăẮắẰằẴẵẲẳÂâẤấẦầẪẫẨẩǍǎÅåǺǻÄäǞǟÃãȦȧǠǡĄąĄ́ą́Ą̃ą̃ĀāĀ̀ā̀ẢảȀȁA̋a̋ȂȃẠạẶặẬậḀḁȺⱥꞺꞻᶏẚＡａ@4]+[gǴǵĞğĜĝǦǧĠġG̃g̃ĢģḠḡǤǥꞠꞡƓɠᶃꬶＧｇqꝖꝗꝘꝙɋʠ]+([ÓóÒòŎŏÔôỐốỒồỖỗỔổǑǒÖöȪȫŐőÕõṌṍṎṏȬȭȮȯO͘o͘ȰȱØøǾǿǪǫǬǭŌōṒṓṐṑỎỏȌȍȎȏƠơỚớỜờỠỡỞởỢợỌọỘộO̩o̩Ò̩ò̩Ó̩ó̩ƟɵꝊꝋꝌꝍⱺＯｏ0e3ЄєЕеÉéÈèĔĕÊêẾếỀềỄễỂểÊ̄ê̄Ê̌ê̌ĚěËëẼẽĖėĖ́ė́Ė̃ė̃ȨȩḜḝĘęĘ́ę́Ę̃ę̃ĒēḖḗḔḕẺẻȄȅE̋e̋ȆȇẸẹỆệḘḙḚḛɆɇE̩e̩È̩è̩É̩é̩ᶒⱸꬴꬳＥｅiÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌ]+[tŤťṪṫŢţṬṭȚțṰṱṮṯŦŧȾⱦƬƭƮʈT̈ẗᵵƫȶ]+([rŔŕŘřṘṙŖŗȐȑȒȓṚṛṜṝṞṟR̃r̃ɌɍꞦꞧⱤɽᵲᶉꭉ]+[yÝýỲỳŶŷY̊ẙŸÿỸỹẎẏȲȳỶỷỴỵɎɏƳƴỾỿ]+|[rŔŕŘřṘṙŖŗȐȑȒȓṚṛṜṝṞṟR̃r̃ɌɍꞦꞧⱤɽᵲᶉꭉ]+[iÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌ]+[e3ЄєЕеÉéÈèĔĕÊêẾếỀềỄễỂểÊ̄ê̄Ê̌ê̌ĚěËëẼẽĖėĖ́ė́Ė̃ė̃ȨȩḜḝĘęĘ́ę́Ę̃ę̃ĒēḖḗḔḕẺẻȄȅE̋e̋ȆȇẸẹỆệḘḙḚḛɆɇE̩e̩È̩è̩É̩é̩ᶒⱸꬴꬳＥｅ]+)?)?[sŚśṤṥŜŝŠšṦṧṠṡŞşṢṣṨṩȘșS̩s̩ꞨꞩⱾȿꟅʂᶊᵴ]*\b/, /\b[kḰḱǨǩĶķḲḳḴḵƘƙⱩⱪᶄꝀꝁꝂꝃꝄꝅꞢꞣ]+[iÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌyÝýỲỳŶŷY̊ẙŸÿỸỹẎẏȲȳỶỷỴỵɎɏƳƴỾỿ]+[kḰḱǨǩĶķḲḳḴḵƘƙⱩⱪᶄꝀꝁꝂꝃꝄꝅꞢꞣ]+[e3ЄєЕеÉéÈèĔĕÊêẾếỀềỄễỂểÊ̄ê̄Ê̌ê̌ĚěËëẼẽĖėĖ́ė́Ė̃ė̃ȨȩḜḝĘęĘ́ę́Ę̃ę̃ĒēḖḗḔḕẺẻȄȅE̋e̋ȆȇẸẹỆệḘḙḚḛɆɇE̩e̩È̩è̩É̩é̩ᶒⱸꬴꬳＥｅ]([rŔŕŘřṘṙŖŗȐȑȒȓṚṛṜṝṞṟR̃r̃ɌɍꞦꞧⱤɽᵲᶉꭉ]+[yÝýỲỳŶŷY̊ẙŸÿỸỹẎẏȲȳỶỷỴỵɎɏƳƴỾỿ]+|[rŔŕŘřṘṙŖŗȐȑȒȓṚṛṜṝṞṟR̃r̃ɌɍꞦꞧⱤɽᵲᶉꭉ]+[iÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌ]+[e3ЄєЕеÉéÈèĔĕÊêẾếỀềỄễỂểÊ̄ê̄Ê̌ê̌ĚěËëẼẽĖėĖ́ė́Ė̃ė̃ȨȩḜḝĘęĘ́ę́Ę̃ę̃ĒēḖḗḔḕẺẻȄȅE̋e̋ȆȇẸẹỆệḘḙḚḛɆɇE̩e̩È̩è̩É̩é̩ᶒⱸꬴꬳＥｅ]+)?[sŚśṤṥŜŝŠšṦṧṠṡŞşṢṣṨṩȘșS̩s̩ꞨꞩⱾȿꟅʂᶊᵴ]*\b/, /\b[tŤťṪṫŢţṬṭȚțṰṱṮṯŦŧȾⱦƬƭƮʈT̈ẗᵵƫȶ]+[rŔŕŘřṘṙŖŗȐȑȒȓṚṛṜṝṞṟR̃r̃ɌɍꞦꞧⱤɽᵲᶉꭉ]+([aÁáÀàĂăẮắẰằẴẵẲẳÂâẤấẦầẪẫẨẩǍǎÅåǺǻÄäǞǟÃãȦȧǠǡĄąĄ́ą́Ą̃ą̃ĀāĀ̀ā̀ẢảȀȁA̋a̋ȂȃẠạẶặẬậḀḁȺⱥꞺꞻᶏẚＡａ4]+[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲŊŋꞐꞑꞤꞥᵰᶇɳȵꬻꬼИиПпＮｎ]+([iÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌ]+[e3ЄєЕеÉéÈèĔĕÊêẾếỀềỄễỂểÊ̄ê̄Ê̌ê̌ĚěËëẼẽĖėĖ́ė́Ė̃ė̃ȨȩḜḝĘęĘ́ę́Ę̃ę̃ĒēḖḗḔḕẺẻȄȅE̋e̋ȆȇẸẹỆệḘḙḚḛɆɇE̩e̩È̩è̩É̩é̩ᶒⱸꬴꬳＥｅ]+|[yÝýỲỳŶŷY̊ẙŸÿỸỹẎẏȲȳỶỷỴỵɎɏƳƴỾỿ]+|[e3ЄєЕеÉéÈèĔĕÊêẾếỀềỄễỂểÊ̄ê̄Ê̌ê̌ĚěËëẼẽĖėĖ́ė́Ė̃ė̃ȨȩḜḝĘęĘ́ę́Ę̃ę̃ĒēḖḗḔḕẺẻȄȅE̋e̋ȆȇẸẹỆệḘḙḚḛɆɇE̩e̩È̩è̩É̩é̩ᶒⱸꬴꬳＥｅ]+[rŔŕŘřṘṙŖŗȐȑȒȓṚṛṜṝṞṟR̃r̃ɌɍꞦꞧⱤɽᵲᶉꭉ]+|[oÓóÒòŎŏÔôỐốỒồỖỗỔổǑǒÖöȪȫŐőÕõṌṍṎṏȬȭȮȯO͘o͘ȰȱØøǾǿǪǫǬǭŌōṒṓṐṑỎỏȌȍȎȏƠơỚớỜờỠỡỞởỢợỌọỘộO̩o̩Ò̩ò̩Ó̩ó̩ƟɵꝊꝋꝌꝍⱺＯｏ]+[iÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌ]+[dĎďḊḋḐḑD̦d̦ḌḍḒḓḎḏĐđÐðƉɖƊɗᵭᶁᶑȡ]+)|[oÓóÒòŎŏÔôỐốỒồỖỗỔổǑǒÖöȪȫŐőÕõṌṍṎṏȬȭȮȯO͘o͘ȰȱØøǾǿǪǫǬǭŌōṒṓṐṑỎỏȌȍȎȏƠơỚớỜờỠỡỞởỢợỌọỘộO̩o̩Ò̩ò̩Ó̩ó̩ƟɵꝊꝋꝌꝍⱺＯｏ]+[iÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌ]+[dĎďḊḋḐḑD̦d̦ḌḍḒḓḎḏĐđÐðƉɖƊɗᵭᶁᶑȡ]+)[sŚśṤṥŜŝŠšṦṧṠṡŞşṢṣṨṩȘșS̩s̩ꞨꞩⱾȿꟅʂᶊᵴ]*\b/, /\b[cĆćĈĉČčĊċÇçḈḉȻȼꞒꞓꟄꞔƇƈɕ]+[ÓóÒòŎŏÔôỐốỒồỖỗỔổǑǒÖöȪȫŐőÕõṌṍṎṏȬȭȮȯO͘o͘ȰȱØøǾǿǪǫǬǭŌōṒṓṐṑỎỏȌȍȎȏƠơỚớỜờỠỡỞởỢợỌọỘộO̩o̩Ò̩ò̩Ó̩ó̩ƟɵꝊꝋꝌꝍⱺＯｏ0]{2,}[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲŊŋꞐꞑꞤꞥᵰᶇɳȵꬻꬼИиПпＮｎ]+[sŚśṤṥŜŝŠšṦṧṠṡŞşṢṣṨṩȘșS̩s̩ꞨꞩⱾȿꟅʂᶊᵴ]*\b/, /\b[cĆćĈĉČčĊċÇçḈḉȻȼꞒꞓꟄꞔƇƈɕ]+[hĤĥȞȟḦḧḢḣḨḩḤḥḪḫH̱ẖĦħⱧⱨꞪɦꞕΗНн]+[iÍíi̇́Ììi̇̀ĬĭÎîǏǐÏïḮḯĨĩi̇̃ĮįĮ́į̇́Į̃į̇̃ĪīĪ̀ī̀ỈỉȈȉI̋i̋ȊȋỊịꞼꞽḬḭƗɨᶖİiIıＩｉ1lĺľļḷḹl̃ḽḻłŀƚꝉⱡɫɬꞎꬷꬸꬹᶅɭȴＬｌ]+[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲŊŋꞐꞑꞤꞥᵰᶇɳȵꬻꬼИиПпＮｎ]+[kḰḱǨǩĶķḲḳḴḵƘƙⱩⱪᶄꝀꝁꝂꝃꝄꝅꞢꞣ]+[sŚśṤṥŜŝŠšṦṧṠṡŞşṢṣṨṩȘșS̩s̩ꞨꞩⱾȿꟅʂᶊᵴ]*\b/]
              , d = t => l.some((e => e.test(t)));
            class c {
                id = 0;
                name = "";
                nameColor = "#FFFFFF";
                rarity = 0;
                level = 0;
                isNew = !0;
                x = 0;
                y = 0;
                size = 0;
                facing = 0;
                flags = 0;
                healthRatio = 1;
                shieldRatio = 0;
                team = 0;
                wearing = 0;
                updatePosition = !1;
                updateSize = !1;
                updateFacing = !1;
                updateFlags = !1;
                updateHealth = !1;
                updateDisplay = !1;
                update(t) {
                    this.x === t.x && this.y === t.y || (this.x = t.x,
                    this.y = t.y,
                    this.updatePosition = !0),
                    this.size !== t.size && (this.size = t.size,
                    this.updateSize = !0),
                    this.facing !== t.facing && (this.facing = t.facing,
                    this.updateFacing = !0);
                    let e = 0;
                    t.hit > 0 && (e |= s.so.HIT),
                    t.attack && (e |= s.so.ATTACK),
                    t.defend && (e |= s.so.DEFEND),
                    t.poison.timer > 0 && (e |= s.so.POISON);
                    let i = Math.min(255, Math.max(0, t.team < 0 ? -t.team : 0));
                    i !== this.team && (this.team = i,
                    e |= s.so.TDM);
                    let a = 0;
                    for (const e in s.DQ)
                        t.wearing[s.DQ[e]] > 0 && (a |= s.DQ[e]);
                    a !== this.wearing && (this.wearing = a,
                    e |= s.so.WEARABLES),
                    e !== this.flags && (this.flags = e,
                    this.updateFlags = !0),
                    this.healthRatio === t.health.ratio && this.shieldRatio === t.health.shieldRatio || (this.healthRatio = t.health.ratio,
                    this.shieldRatio = t.health.shieldRatio,
                    this.updateHealth = !0),
                    this.rarity === t.rarity && this.level === t.level && this.name === t.name && this.nameColor === t.nameColor || (this.rarity = t.rarity,
                    this.level = t.level,
                    this.name = t.name,
                    this.nameColor = t.nameColor,
                    this.updateDisplay = !0)
                }
                pipe(t) {
                    if (this.isNew || this.updatePosition || this.updateSize || this.updateFacing || this.updateFlags || this.updateHealth || this.updateDisplay) {
                        if (this.isNew)
                            return this.isNew = !1,
                            this.updatePosition = !1,
                            this.updateSize = !1,
                            this.updateFacing = !1,
                            this.updateFlags = !1,
                            t.setUint32(this.id),
                            t.setUint8(s.w6.NEW),
                            t.setStringUTF8(this.name),
                            t.setStringUTF8(this.nameColor),
                            t.setUint8(this.rarity),
                            t.setUint16(this.level),
                            t.setFloat32(this.x),
                            t.setFloat32(this.y),
                            t.setFloat32(this.size),
                            t.setFloat32(this.facing),
                            t.setUint8(this.flags),
                            this.flags & s.so.TDM && t.setUint8(this.team),
                            this.flags & s.so.WEARABLES && t.setUint8(this.wearing),
                            t.setUint8(255 * this.healthRatio + .5 | 0),
                            void t.setUint8(255 * this.shieldRatio + .5 | 0);
                        t.setUint32(this.id),
                        t.setUint8((this.updatePosition ? s.w6.POSITION : 0) | (this.updateSize ? s.w6.SIZE : 0) | (this.updateFacing ? s.w6.FACING : 0) | (this.updateFlags ? s.w6.FLAGS : 0) | (this.updateHealth ? s.w6.HEALTH : 0) | (this.updateDisplay ? s.w6.DISPLAY : 0)),
                        this.updatePosition && (this.updatePosition = !1,
                        t.setFloat32(this.x),
                        t.setFloat32(this.y)),
                        this.updateSize && (this.updateSize = !1,
                        t.setFloat32(this.size)),
                        this.updateFacing && (this.updateFacing = !1,
                        t.setFloat32(this.facing)),
                        this.updateFlags && (this.updateFlags = !1,
                        t.setUint8(this.flags),
                        this.flags & s.so.TDM && t.setUint8(this.team),
                        this.flags & s.so.WEARABLES && t.setUint8(this.wearing)),
                        this.updateHealth && (this.updateHealth = !1,
                        t.setUint8(255 * this.healthRatio + .5 | 0),
                        t.setUint8(255 * this.shieldRatio + .5 | 0)),
                        this.updateDisplay && (this.updateDisplay = !1,
                        t.setStringUTF8(this.name),
                        t.setStringUTF8(this.nameColor),
                        t.setUint8(this.rarity),
                        t.setUint16(this.level))
                    }
                }
            }
            class g {
                id = 0;
                index = 0;
                rarity = 0;
                isNew = !0;
                x = 0;
                y = 0;
                size = 0;
                facing = 0;
                hit = !1;
                updatePosition = !1;
                updateSize = !1;
                updateFacing = !1;
                updateFlags = !1;
                update(t) {
                    this.x === t.x && this.y === t.y || (this.x = t.x,
                    this.y = t.y,
                    this.updatePosition = !0),
                    this.size !== t.size && (this.size = t.size,
                    this.updateSize = !0),
                    this.facing !== t.facing && (this.facing = t.facing,
                    this.updateFacing = !0),
                    this.hit !== t.hit && (this.hit = t.hit > 0,
                    this.updateFlags = !0)
                }
                pipe(t) {
                    if (this.isNew || this.updatePosition || this.updateSize || this.updateFacing || this.updateFlags) {
                        if (this.isNew)
                            return this.isNew = !1,
                            this.updatePosition = !1,
                            this.updateSize = !1,
                            this.updateFacing = !1,
                            this.updateFlags = !1,
                            t.setUint32(this.id),
                            t.setUint8(s.w6.NEW),
                            t.setUint8(this.index),
                            t.setUint8(this.rarity),
                            t.setFloat32(this.x),
                            t.setFloat32(this.y),
                            t.setFloat32(this.size),
                            t.setFloat32(this.facing),
                            void t.setUint8(this.hit ? s.so.HIT : 0);
                        t.setUint32(this.id),
                        t.setUint8((this.updatePosition ? s.w6.POSITION : 0) | (this.updateSize ? s.w6.SIZE : 0) | (this.updateFacing ? s.w6.FACING : 0) | (this.updateFlags ? s.w6.FLAGS : 0)),
                        this.updatePosition && (this.updatePosition = !1,
                        t.setFloat32(this.x),
                        t.setFloat32(this.y)),
                        this.updateSize && (this.updateSize = !1,
                        t.setFloat32(this.size)),
                        this.updateFacing && (this.updateFacing = !1,
                        t.setFloat32(this.facing)),
                        this.updateFlags && (this.updateFlags = !1,
                        t.setUint8(this.hit ? s.so.HIT : 0))
                    }
                }
            }
            class p {
                id = 0;
                index = 0;
                rarity = 0;
                isNew = !0;
                x = 0;
                y = 0;
                size = 0;
                facing = 0;
                flags = 0;
                healthRatio = 1;
                ropeBodies = [];
                updatePosition = !1;
                updateSize = !1;
                updateFacing = !1;
                updateFlags = !1;
                updateHealth = !1;
                updateRopeBodies = !1;
                update(t) {
                    this.x === t.x && this.y === t.y || (this.x = t.x,
                    this.y = t.y,
                    this.updatePosition = !0),
                    this.size !== t.size && (this.size = t.size,
                    this.updateSize = !0),
                    this.facing !== t.facing && (this.facing = t.facing,
                    this.updateFacing = !0);
                    let e = 0;
                    if (t.hit > 0 && (e |= s.so.HIT),
                    t.ropeBodies?.length > 0) {
                        this.updateRopeBodies = !0,
                        this.ropeBodies = [{
                            x: 0,
                            y: 0
                        }];
                        for (let i = 0; i < t.ropeBodies.length; i++)
                            t.ropeBodies[i].hit > 0 && 0 === (e & s.so.HIT) && (e |= s.so.HIT),
                            this.ropeBodies.push({
                                x: (t.ropeBodies[i].x - this.x) / this.size,
                                y: (t.ropeBodies[i].y - this.y) / this.size
                            })
                    }
                    null !== t.target && (e |= s.so.ATTACK),
                    t.poison.timer > 0 && (e |= s.so.POISON),
                    t.friendly && (e |= s.so.FRIEND),
                    e !== this.flags && (this.flags = e,
                    this.updateFlags = !0),
                    this.healthRatio !== t.health.ratio && (this.healthRatio = t.health.ratio,
                    this.updateHealth = !0)
                }
                pipe(t) {
                    if (this.isNew || this.updatePosition || this.updateSize || this.updateFacing || this.updateFlags || this.updateHealth || this.updateRopeBodies) {
                        if (this.isNew)
                            return this.isNew = !1,
                            this.updatePosition = !1,
                            this.updateSize = !1,
                            this.updateFacing = !1,
                            this.updateFlags = !1,
                            t.setUint32(this.id),
                            t.setUint8(s.w6.NEW),
                            t.setUint8(this.index),
                            t.setUint8(this.rarity),
                            t.setFloat32(this.x),
                            t.setFloat32(this.y),
                            t.setFloat32(this.size),
                            t.setFloat32(this.facing),
                            t.setUint8(this.flags),
                            void t.setUint8(255 * this.healthRatio + .5 | 0);
                        if (t.setUint32(this.id),
                        t.setUint8((this.updatePosition ? s.w6.POSITION : 0) | (this.updateSize ? s.w6.SIZE : 0) | (this.updateFacing ? s.w6.FACING : 0) | (this.updateFlags ? s.w6.FLAGS : 0) | (this.updateHealth ? s.w6.HEALTH : 0) | (this.updateRopeBodies ? s.w6.ROPE_BODIES : 0)),
                        this.updatePosition && (this.updatePosition = !1,
                        t.setFloat32(this.x),
                        t.setFloat32(this.y)),
                        this.updateSize && (this.updateSize = !1,
                        t.setFloat32(this.size)),
                        this.updateFacing && (this.updateFacing = !1,
                        t.setFloat32(this.facing)),
                        this.updateFlags && (this.updateFlags = !1,
                        t.setUint8(this.flags)),
                        this.updateHealth && (this.updateHealth = !1,
                        t.setUint8(255 * this.healthRatio + .5 | 0)),
                        this.updateRopeBodies) {
                            this.updateRopeBodies = !1,
                            t.setUint8(this.ropeBodies.length);
                            for (let e = 0; e < this.ropeBodies.length; e++)
                                t.setFloat32(this.ropeBodies[e].x),
                                t.setFloat32(this.ropeBodies[e].y)
                        }
                    }
                }
            }
            class m {
                id = 0;
                isNew = !0;
                x = 0;
                y = 0;
                size = 0;
                creation = 0;
                timer = 0;
                pipe(t) {
                    this.isNew && (this.isNew = !1,
                    t.setUint32(this.id),
                    t.setUint8(s.w6.NEW),
                    t.setFloat32(this.x),
                    t.setFloat32(this.y),
                    t.setFloat32(this.size),
                    t.setStringUTF8(this.creation),
                    t.setUint32(this.timer + .5 | 0))
                }
                kill(t) {
                    t.setUint32(this.id),
                    t.setUint8(s.w6.DIE)
                }
            }
            class u {
                x = 0;
                y = 0;
                fov = 500;
                lightingBoost = 0;
                playerCache = new Map;
                petalCache = new Map;
                mobCache = new Map;
                markerCache = new Map;
                lightningCache = new Set;
                dropsToAdd = [];
                dropsToRemove = [];
                see(t) {
                    const e = a.A.viewsSpatialHash.retrieve({
                        _AABB: {
                            x1: this.x - this.fov / 1.85,
                            y1: this.y - this.fov / 1.85,
                            x2: this.x + this.fov / 1.85,
                            y2: this.y + this.fov / 1.85
                        }
                    });
                    e.forEach((t => {
                        switch (t.type) {
                        case s.wv.PLAYER:
                            if (!this.playerCache.has(t.id)) {
                                const e = new c;
                                e.id = t.id,
                                e.name = t.name,
                                e.nameColor = t.nameColor,
                                e.isNew = !0,
                                this.playerCache.set(t.id, e)
                            }
                            this.playerCache.get(t.id).update(t);
                            break;
                        case s.wv.PETAL:
                            if (!this.petalCache.has(t.id)) {
                                const e = new g;
                                e.id = t.id,
                                e.index = t.index,
                                e.rarity = t.rarity,
                                e.isNew = !0,
                                this.petalCache.set(t.id, e)
                            }
                            this.petalCache.get(t.id).update(t);
                            break;
                        case s.wv.MOB:
                            if (t.lastSeen = performance.now(),
                            !this.mobCache.has(t.id)) {
                                const e = new p;
                                e.id = t.id,
                                e.index = t.index,
                                e.rarity = t.rarity,
                                e.isNew = !0,
                                this.mobCache.set(t.id, e)
                            }
                            this.mobCache.get(t.id).update(t)
                        }
                    }
                    )),
                    this.playerCache.forEach((i => {
                        if (!e.has(i.id))
                            return t.setUint32(i.id),
                            t.setUint8(s.w6.DIE),
                            void this.playerCache.delete(i.id);
                        i.pipe(t)
                    }
                    )),
                    t.setUint32(0),
                    this.petalCache.forEach((i => {
                        if (!e.has(i.id))
                            return t.setUint32(i.id),
                            t.setUint8(s.w6.DIE),
                            void this.petalCache.delete(i.id);
                        i.pipe(t)
                    }
                    )),
                    t.setUint32(0),
                    this.mobCache.forEach((i => {
                        if (!e.has(i.id))
                            return t.setUint32(i.id),
                            t.setUint8(s.w6.DIE),
                            void this.mobCache.delete(i.id);
                        i.pipe(t)
                    }
                    )),
                    t.setUint32(0),
                    this.dropsToAdd.forEach((e => {
                        t.setUint32(e.id),
                        t.setFloat32(e.x),
                        t.setFloat32(e.y),
                        t.setFloat32(e.size),
                        t.setUint8(e.index),
                        t.setUint8(e.rarity),
                        t.setUint16(e.duration)
                    }
                    )),
                    t.setUint32(0),
                    this.dropsToRemove.forEach((e => {
                        t.setUint32(e.id)
                    }
                    )),
                    t.setUint32(0),
                    this.dropsToAdd.length = 0,
                    this.dropsToRemove.length = 0,
                    a.A.pentagrams.forEach((e => {
                        if (!this.markerCache.has(e.id)) {
                            const i = new m;
                            i.id = e.id,
                            i.isNew = !0,
                            i.x = e.x,
                            i.y = e.y,
                            i.size = e.size,
                            i.creation = e.createdAt,
                            i.timer = e.timer,
                            this.markerCache.set(e.id, i),
                            i.pipe(t)
                        }
                    }
                    )),
                    this.markerCache.forEach((e => {
                        a.A.pentagrams.has(e.id) || (e.kill(t),
                        this.markerCache.delete(e.id))
                    }
                    )),
                    t.setUint32(0),
                    a.A.lightning.forEach((e => {
                        if (!this.lightningCache.has(e.id)) {
                            t.setUint32(e.id),
                            t.setUint16(e.points.length);
                            for (const i of e.points)
                                t.setFloat32(i.x),
                                t.setFloat32(i.y);
                            this.lightningCache.add(e.id)
                        }
                    }
                    )),
                    t.setUint32(0),
                    this.lightningCache.forEach((t => {
                        a.A.lightning.has(t) || this.lightningCache.delete(t)
                    }
                    ))
                }
            }
            class y {
                constructor(t) {
                    this.uuid = t.uuid,
                    this.username = t.username,
                    this.level = t.level,
                    this.xp = t.xp,
                    this.slots = t.slots,
                    this.secondarySlots = t.secondarySlots,
                    this.body = t.body,
                    this.team = t.team,
                    this.inventory = t.inventory,
                    f.disconnects.set(this.uuid, this),
                    this.body && (this.body.client = null),
                    this.timeout = setTimeout(( () => {
                        f.disconnects.delete(this.uuid),
                        this.body && !this.body.health.isDead && this.body.destroy()
                    }
                    ), 864e5)
                }
            }
            class f {
                static clients = new Map;
                static disconnects = new Map;
                constructor(t, e, i=0) {
                    this.id = t,
                    this.verified = !1,
                    this.username = "unknown",
                    this.uuid = e,
                    this.nameColor = ["#FFFFFF", "#D85555"][+i],
                    this.masterPermissions = +i,
                    this.inventory = {},
                    this.camera = new u,
                    this.body = null,
                    a.A.clients.set(t, this),
                    console.log(`Client ${t} connected`),
                    this.squad = [],
                    this.moon = undefined,
                    this.squadinvite = null,
                    this.team = !1,
                    a.A.isTDM && (this.team = 0,
                    a.A.teamCount > 0 && (this.team = (this.id - 1) % a.A.teamCount + 1)),
                    this.slots = new Array(5).fill(null).map(( () => ({
                        id: 0,
                        rarity: 0
                    }))),
                    this.slotRatios = new Array(5).fill(0).map(( () => 0)),
                    this.secondarySlots = new Array(5).fill(null).map(( () => null)),
                    this.level = 1,
                    this.skills = {
                        skillpoints: 0,
                        skills: {
                            inventory: {
                                points: [3, 6, 9, 12, 15],
                                namerequires: ["inventory","inventory","inventory","inventory","inventory"],
                                descriptions: ["Increases slot count.","Increases slot count.","Increases slot count.","Increases slot count.","Increases slot count."],
                                levelrequires: [0, 1, 2, 3, 4],
                                level: 0
                            },
                            duplicator: {
                                points: [10, 20, 30, 40],
                                namerequires: ["inventory","duplicator","duplicator","duplicator"],
                                descriptions: ["Gives an extra particle to petals with over 2 particles.","Gives an extra particle to petals with over 2 particles.","Dupes the first petal in the loadout except for Unique and Eternal petals.", "The previous ability can now dupe Unique and Eternal petals."],
                                levelrequires: [5, 1, 2, 3],
                                level: 0
                            },
                            eggHP: {
                                points: [2, 5, 8, 11, 14, 17, 20, 23, 26],
                                namerequires: ["eggHP","eggHP","eggHP","eggHP","eggHP","eggHP","eggHP","eggHP","eggHP"],
                                descriptions: ["Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 32.25%"],
                                levelrequires: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                                level: 0
                            },
                            reload: {
                                points: [2, 6, 10, 12, 16, 20, 24, 28, 32],
                                namerequires: ["reload","reload","reload","reload","reload","reload","reload","reload","reload"],
                                descriptions: ["Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -19%."],
                                levelrequires: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                                level: 0
                            },
                            petalHP: {
                                points: [2, 4, 6, 8, 10, 12, 14, 16, 18],
                                namerequires: ["petalHP","petalHP","petalHP","petalHP","petalHP","petalHP","petalHP","petalHP","petalHP"],
                                descriptions: ["Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 32.25%"],
                                levelrequires: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                                level: 0
                            },
                            magnetism: {
                                points: [15],
                                namerequires: ["inventory"],
                                descriptions: ["Increases pickup range by 1500."],
                                levelrequires: [5],
                                level: 0
                            },
                            maxHP: {
                                points: [2, 5, 8, 11, 14, 17, 20, 23, 26],
                                namerequires: ["maxHP","maxHP","maxHP","maxHP","maxHP","maxHP","maxHP","maxHP","maxHP"],
                                descriptions: ["Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 69%"],
                                levelrequires: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                                level: 0
                            }
                        }
                    }
                    this.xp = 1,
                    this.lastChat = 0,
                    this.frownyMessages = 0,
                    this.systemMessage("Use /help for more info."),
                    this.systemMessage("If you are locked out of your account try waiting 90 seconds before logging in again.")
                }
                addXP(t) {
                    if (!Number.isFinite(t))
                        return;
                    for (this.xp += t; this.xp < (0,
                    r.UU)(this.level - 1); )
                        this.level--,
                        this.body && !this.body.health.isDead && (this.body.health.set(this.healthAdjustement + this.body.petalSlots.reduce(( (t, e) => t + e.config.tiers[e.rarity].extraHealth), 0)),
                        this.body.damage = this.bodyDamageAdjustment);
                        const getTotalXpForLevel = (lvl) => {
                            if (lvl <= 1) return 0;
                            if (lvl === 2) return 15;
                            return 15 + Math.floor(210 * (1 - (1.15 ** (lvl - 2))) / (1 - 1.15));
                        };
                        
                        for (; this.xp >= getTotalXpForLevel(this.level + 1); ) {
                            this.level++;
                            this.skills.skillpoints += 2;
                            
                            if (this.body && !this.body.health.isDead) {
                                this.body.health.set(
                                    this.healthAdjustement + 
                                    this.body.petalSlots.reduce((t, e) => t + e.config.tiers[e.rarity].extraHealth, 0)
                                );
                                this.body.damage = this.bodyDamageAdjustment;
                            }
                        }
                        const currentLevelFloor = getTotalXpForLevel(this.level);
                        const nextLevelCeiling = getTotalXpForLevel(this.level + 1);

                        this.levelProgress = this.level < 2 
                            ? this.xp / nextLevelCeiling 
                            : (this.xp - currentLevelFloor) / (nextLevelCeiling - currentLevelFloor);
                }
                get healthAdjustement() {
                    return (200 * Math.pow(1.03303636, this.level - 1)) * Math.pow(1.3, this.skills.skills.maxHP?.level + (this.skills.skills.maxHP?.level === 9 ? 1 : 0)) ?? 1
                }
                get bodyDamageAdjustment() {
                    return 25 * Math.pow(1.03303636, this.level - 1)
                }
                get highestRarity() {
                    let t = 0;
                    for (const e of this.slots)
                        e && e.rarity > t && (t = e.rarity);
                    for (const e of this.secondarySlots)
                        e && e.rarity > t && (t = e.rarity);
                    return t
                }
                pickupDrop(t) {
                    for (let a = 0; a < t.amount; a++) {
                        let pickedup = 0;
                        for (let e = 0; e < this.secondarySlots.length; e++) {
                            if (this.secondarySlots[e] === null) {
                                this.secondarySlots[e] = {
                                    id: t.index,
                                    rarity: t.rarity
                                }
                                pickedup++
                                break
                            }
                            }
                        if (pickedup === 0) {
                        const e = h.cK[t.rarity].name;
                        this.inventory[e][t.index] || (this.inventory[e][t.index] = 0),
                        this.inventory[e][t.index] += 1}
                    }
                    return !0
                }
                onMessage(t) {
                    switch (t.getUint8()) {
                    case s.fh.PING:
                        this.talk(s.de.PONG);
                        break;
                    case s.fh.VERIFY:
                        if (this.verified)
                            return this.kick("Already verified");
                        this.username = t.getStringUTF8();
                        const e = this.username.toLowerCase();
                        if (this.username.length > 24 || d(e))
                            return this.kick("Invalid username");
                        
                        this.verified = !0,
                        console.log(`Client ${this.id} verified as ${this.username}`),
                        this.talk(s.de.READY),
                        this.sendRoom(),
                        a.A.sendTerrain(this.id),
                        h.cK.forEach((t => this.inventory[t.name] = {})),
                        this.uuid === a.A.secretKey && this.masterPermissions < 1 && (this.nameColor = "#F5D230");
                        this.auth ??= {
                            loggedIn: false,
                            userId: null,
                            username:  `Guest${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
                            token: null,
                            refreshToken: null
                        };
                        this.squad = [this.auth.username]
                        break;
                    case s.fh.SPAWN:
                        if (!this.verified)
                            return void this.kick("Not verified");
                        if (this.body && !this.body.health.isDead)
                            return;
                        this.body = new n.ai(a.A.getPlayerSpawn(this)),
                        this.body.name = this.username,
                        this.body.nameColor = this.nameColor,
                        this.body.client = this,
                        this.body.health.set(this.healthAdjustement),
                        this.body.damage = this.bodyDamageAdjustment,
                        this.addXP(0),
                        this.body.initSlots(this.slots.length);
                        for (let t = 0; t < this.slots.length; t++)
                            this.slots[t] && this.body.setSlot(t, this.slots[t].id, this.slots[t].rarity);
                        this.body.spawnInvincibility = !0,
                        setTimeout(( () => {
                            this.body && (this.body.spawnInvincibility = !1)
                        }
                        ), 2e3),
                        a.A.isTDM && (this.body.team = -this.team),
                        a.A.alivePlayers.push(this);
                        break;
                    case s.fh.INPUTS:
                        {
                            if (!this.verified)
                                return void this.kick("Not verified");
                            if (null === this.body)
                                return;
                            const e = t.getUint8();
                            if (64 & ~e && 128 & ~e) {
                                let t = -!(2 & ~e) + !(8 & ~e)
                                  , i = -!(1 & ~e) + !(4 & ~e);
                                0 === t && 0 === i ? this.body.moveStrength = 0 : (this.body.moveAngle = Math.atan2(i, t),
                                this.body.moveStrength = this.body.speed)
                            } else
                                this.body.moveAngle = t.getFloat32(),
                                this.body.moveStrength = Math.min(1, Math.max(0, t.getFloat32())) * this.body.speed;
                            this.body.attack = !(16 & ~e),
                            this.body.defend = !(32 & ~e)
                        }
                        break;
                    case s.fh.CHANGE_LOADOUT:
                        {
                            if (!this.verified)
                                return void this.kick("Not verified");
                            if (!this.body || this.body.health.isDead)
                                return;
                            const e = t.getUint8()
                              , i = t.getUint8()
                              , s = t.getUint8()
                              , a = t.getUint8();
                            switch (e) {
                            case 0:
                                if (i < 0 || i >= this.slots.length)
                                    return;
                                switch (s) {
                                case 0:
                                    if (a < 0 || a >= this.slots.length)
                                        return;
                                    const t = this.slots[i];
                                    this.slots[i] = this.slots[a],
                                    this.slots[a] = t,
                                    this.slots[i] && this.body.setSlot(i, this.slots[i].id, this.slots[i].rarity),
                                    this.body.setSlot(a, this.slots[a].id, this.slots[a].rarity);
                                    break;
                                case 1:
                                    if (a < 0 || a >= this.secondarySlots.length)
                                        return;
                                    const e = this.slots[i];
                                    this.slots[i] = this.secondarySlots[a],
                                    this.secondarySlots[a] = e,
                                    this.slots[i] && this.body.setSlot(i, this.slots[i].id, this.slots[i].rarity)
                                }
                                break;
                            case 1:
                                if (i < 0 || i >= this.secondarySlots.length || null === this.secondarySlots[i])
                                    return;
                                switch (s) {
                                case 0:
                                    if (a < 0 || a >= this.slots.length)
                                        return;
                                    const t = this.slots[a];
                                    this.slots[a] = this.secondarySlots[i],
                                    this.secondarySlots[i] = t,
                                    this.body.setSlot(a, this.slots[a].id, this.slots[a].rarity);
                                    break;
                                case 1:
                                    if (a < 0 || a >= this.secondarySlots.length || null === this.secondarySlots[a])
                                        return;
                                    const e = this.secondarySlots[i];
                                    this.secondarySlots[i] = this.secondarySlots[a],
                                    this.secondarySlots[a] = e
                                }
                            }
                        }
                        this.body && this.body.initSlots(this.slots.length);
                        break;
                    case s.fh.INVENTORY_CHANGE_LOADOUT:
                        {
                            if (!this.verified)
                                return void this.kick("Not verified");
                            if (!this.body || this.body.health.isDead)
                                return;
                            let e = t.getUint8()
                              , i = t.getUint8()
                              , s = t.getUint8()
                              , a = t.getUint8()
                              , n = t.getUint8()
                              , r = t.getUint8()
                              , o = h.cK[n]?.name;
                            switch (s) {
                            case 0:
                                if (!this.inventory[h.cK[i].name][e] || this.slots[a].id !== r || this.slots[a].rarity !== n)
                                    return;
                                this.inventory[o][r] || (this.inventory[o][r] = 0),
                                this.inventory[o][r] += 1,
                                this.slots[a].id = e,
                                this.slots[a].rarity = i,
                                this.body.setSlot(a, this.slots[a].id, this.slots[a].rarity),
                                this.inventory[h.cK[i].name][e]--;
                                break;
                            case 1:
                                if (!this.inventory[h.cK[i].name][e] || 255 !== r && this.secondarySlots[a]?.id !== r || this.secondarySlots[a]?.rarity !== n)
                                    return;
                                if (255 === r) {
                                    this.secondarySlots[a] = {
                                        id: e,
                                        rarity: i
                                    },
                                    this.inventory[h.cK[i].name][e]--;
                                    break
                                }
                                this.inventory[o][r] || (this.inventory[o][r] = 0),
                                this.inventory[o][r] += 1,
                                this.secondarySlots[a].id = e,
                                this.secondarySlots[a].rarity = i,
                                this.inventory[h.cK[i].name][e]--;
                                break;
                            case 2:
                                r = this.secondarySlots[a]?.id,
                                o = h.cK[this.secondarySlots[a]?.rarity]?.name,
                                this.inventory[o][r] || (this.inventory[o][r] = 0),
                                this.inventory[o][r] += 1,
                                this.secondarySlots[a] = null
                            }
                        }
                        break;
                    case s.fh.DEV_CHEAT:
                        if (!this.verified)
                            return void this.kick("Not verified");
                        if (this.masterPermissions < 1 || !this.body || this.body.health.isDead)
                            return;
                        switch (t.getUint8()) {
                        case s.F6.TELEPORT:
                            this.body.x += t.getFloat32(),
                            this.body.y += t.getFloat32();
                            break;
                        case s.F6.GODMODE:
                            this.body.health.invulnerable = !this.body.health.invulnerable;
                            break;
                        case s.F6.CHANGE_TEAM:
                            {
                                const e = a.A.entities.get(t.getUint32());
                                e && (this.body.team = e.team)
                            }
                            break;
                        case s.F6.SPAWN_MOB:
                            {
                                const e = t.getUint32()
                                  , i = t.getUint8()
                                  , r = t.getUint8();
                                if (i < 0 || i >= h.GJ.length)
                                    return this.talk(s.de.JSON_MESSAGE, {
                                        promiseID: e,
                                        ok: !1,
                                        message: "Index out of range"
                                    });
                                if (r < 0 || r >= h.cK.length)
                                    return this.talk(s.de.JSON_MESSAGE, {
                                        promiseID: e,
                                        ok: !1,
                                        message: "Rarity out of range"
                                    });
                                const o = new n.Bw(a.A.random());
                                o.define(h.ey[i], r),
                                o.x = this.body.x, o.y = this.body.y;
                                this.talk(s.de.JSON_MESSAGE, {
                                    promiseID: e,
                                    ok: !0,
                                    mob: {
                                        id: o.id,
                                        index: i,
                                        rarity: r,
                                        position: {
                                            x: o.x,
                                            y: o.y
                                        }
                                    }
                                })
                            }
                            break;
                        case s.F6.SET_PETAL:
                            {
                                const e = t.getUint32()
                                  , i = t.getUint32()
                                  , n = t.getUint8()
                                  , r = t.getUint8()
                                  , o = t.getUint8()
                                  , l = a.A.clients.get(i);
                                if (!l)
                                    return this.talk(s.de.JSON_MESSAGE, {
                                        promiseID: e,
                                        ok: !1,
                                        message: "Client not found"
                                    });
                                if (n < 0 || n >= l.slots.length)
                                    return this.talk(s.de.JSON_MESSAGE, {
                                        promiseID: e,
                                        ok: !1,
                                        message: "Slot not found"
                                    });
                                if (r < 0 || r >= h.GJ.length)
                                    return this.talk(s.de.JSON_MESSAGE, {
                                        promiseID: e,
                                        ok: !1,
                                        message: "Index out of range"
                                    });
                                if (o < 0 || o >= h.cK.length)
                                    return this.talk(s.de.JSON_MESSAGE, {
                                        promiseID: e,
                                        ok: !1,
                                        message: "Rarity out of range"
                                    });
                                l.slots[n] = {
                                    id: r,
                                    rarity: o
                                },
                                l.body && l.body.setSlot(n, r, o),
                                this.talk(s.de.JSON_MESSAGE, {
                                    promiseID: e,
                                    ok: !0,
                                    message: "Petal set"
                                })
                            }
                            break;
                        case s.F6.SET_XP:
                            {
                                const e = t.getUint32()
                                  , i = t.getUint32()
                                  , n = t.getUint32()
                                  , h = a.A.clients.get(i);
                                if (!h)
                                    return this.talk(s.de.JSON_MESSAGE, {
                                        promiseID: e,
                                        ok: !1,
                                        message: "Client not found"
                                    });
                                h.addXP(n - h.xp),
                                this.talk(s.de.JSON_MESSAGE, {
                                    promiseID: e,
                                    ok: !0,
                                    message: "XP set"
                                })
                            }
                            break;
                        case s.F6.INFO_DUMP:
                            this.talk(s.de.JSON_MESSAGE, {
                                promiseID: t.getUint32(),
                                ok: !0,
                                entitiesSize: a.A.entities.size,
                                clients: Array.from(a.A.clients.values()).map((t => ({
                                    id: t.id,
                                    username: t.username,
                                    verified: t.verified,
                                    masterPermissions: t.masterPermissions,
                                    team: t.team,
                                    level: t.level,
                                    xp: t.xp
                                }))),
                                key: a.A.secretKey
                            })
                        }
                        break;
                    case s.fh.CHAT_MESSAGE:
                        {
                            if (!this.verified)
                                return void this.kick("Not verified");
                            const e = t.getStringUTF8();
                            if (!/^[\w\s,.!?'"@#%^&*()_\-+=:;<>\/\\|[\]{}~`\u00A0-\uFFFF]{1,128}$/.test(e))
                                return this.systemMessage("That message is too long or contains invalid characters.", "#CACA22"),
                                this.frownyMessages++,
                                void (this.frownyMessages >= 5 && this.kick("Abusing chat"));
                            if (d(e))
                                return this.systemMessage("Please refrain from saying slurs.", "#CA2222"),
                                this.frownyMessages++,
                                void (this.frownyMessages >= 5 && this.kick("Abusing chat"));
                            if (performance.now() - this.lastChat < 500)
                                return void this.systemMessage("You're chatting too fast.", "#22CACA");
                            this.lastChat = performance.now();
                            if (e.startsWith("/")) {
                                if (e.startsWith("/drops")) {
                                    
                                    const args = e.split(" ")
                                    const [cmd, rarity, ...items] = e.split(" ");
                                    const name = items.join(" ");
                                    if (name === '') return this.systemMessage("Invalid args")
                                    let rarityid = rarity;
                                    if (!Number.isInteger(Number(rarity))) {
                                        rarityid = h.cK.findIndex(item => item.name.toLowerCase() === rarity.toLowerCase());
                                    }
                                    
                                    if (rarity < 0 || rarity > 9) return this.systemMessage("Invalid Rarity");
                                    const tables = [
                                        {minRarity: -2, maxRarity: 1},
                                        {minRarity: -1, maxRarity: 1},
                                        {minRarity: 0, maxRarity: 2},
                                        {minRarity: 1, maxRarity: 3},
                                        {minRarity: 2, maxRarity: 4},
                                        {minRarity: 3, maxRarity: 5},
                                        {minRarity: 4, maxRarity: 6},
                                        {minRarity: 5, maxRarity: 6},
                                        {minRarity: 5, maxRarity: 6},
                                        {minRarity: 5, maxRarity: 7}
                                    ]
                                    const multis = [
                                        [1,1,46.8,53.2],
                                        [1,4.8,95.2],
                                        [3,48.5,48.5],
                                        [5,54.5,40.5],
                                        [8,73,19],
                                        [12.5,84,3.5],
                                        [3,95.5,1.5],
                                        [7.3,92.7],
                                        [0.7,99.3],
                                        [0.2,99.4,0.4]
                                    ]
                                    const table = tables[rarityid];
                                    const multi = multis[rarityid];
                                    if (h.ey.findIndex(m => m.name.toLowerCase() === name.toLowerCase()) === -1) return this.systemMessage("Invalid Mob")
                                    this.systemMessage(`${h.ey[h.ey.findIndex(m => m.name.toLowerCase() === name.toLowerCase())].name}:`)
                                    for (const i of h.ey[h.ey.findIndex(m => m.name.toLowerCase() === name.toLowerCase())].drops) {
                                        
                                        let weight = []
    
                                        let total = 0;
                                        let chances = []
    
                                        for (let j = 0; j < 1 + (table.maxRarity - table.minRarity); j++) weight.push(Math.pow(i.chance, j) * multi[j]), total += (Math.pow(i.chance, j) * multi[j]);
    
                                        let random = Math.random() * total;
    
                                        let final = -1;
    
                                        for (let j = 0; j < 1 + (table.maxRarity - table.minRarity); j++) {
                                            if (j + table.minRarity < i.minRarity || j + table.minRarity < 0) continue;
                                            chances.push({chance: Math.round((weight[j]/total)*100000)/1000, rarity: j + table.minRarity})
    
                                            
    
                                        }
                                        this.systemMessage(`${h.GJ[i.index].name}:`)
                                        chances.forEach(item => {
                                            this.systemMessage(`${h.cK[item.rarity].name}: ${item.chance}%`,h.cK[item.rarity].color);
                                        });
    
    
                                    }


                                    
                                    
                                }
                                if (e.startsWith("/spawnmob")) {
                                    const args = e.split(" ")
                                    if (this.auth.username !== "Igor" && this.auth.username !== "Igormain") return this.systemMessage("You are not the dev")
                                    if (!args[3]) this.systemMessage("Invalid args")
                                    for (let i = 0; i < args[3]; i++) {
                                        const mobtype = new n.Bw(a.A.random());
                                        mobtype.define(h.ey[args[1]], args[2]),
                                        mobtype.x = this.body.x, mobtype.y = this.body.y;
                                        mobtype.size *= args[4] ?? 1
                                        mobtype.health.health *= args[5] ?? 1
                                    }
                                }
                                if (e.startsWith("/listmobs")) {
                                    let g = []
                                    for (let i = 0; i < h.ey.length; i++) g.push(`${i}: ` + h.ey[i].name) 
                                    this.systemMessage(g.join(", "))
                                }
                                if (e.startsWith("/listpetals")) {
                                    let g = []
                                    for (let i = 0; i < h.GJ.length; i++) g.push(`${i}: ` + h.GJ[i].name) 
                                    this.systemMessage(g.join(", "))
                                }
                                if (e.startsWith("/players")) {
                                    a.A.clients.forEach(t => this.systemMessage(`ID: ${t.id}, Username: ${t.auth.username}`))
                                }
                                if (e.startsWith("/give")) {
                                    let args = e.split(" ")
                                    if (this.auth.username !== "Igor" && this.auth.username !== "Igormain") return this.systemMessage("You are not the dev")
                                    if (!args[4]) return this.systemMessage("Invalid args /give [id] [petalid] [petalrarity] [amount]")
                                    a.A.clients.forEach(t => {
                                        if (t.id === Number(args[1])) {
                                            t.inventory[h.cK[Number(args[3])].name][Number(args[2])] = t.inventory[h.cK[Number(args[3])].name][Number(args[2])] ?? 0;
                                            t.inventory[h.cK[Number(args[3])].name][Number(args[2])] += Number(args[4])
                                        }
                                    })
                                    
                                }
                                if (e.startsWith("/xp")) {
                                    let args = e.split(" ")
                                    if (this.auth.username !== "Igor" && this.auth.username !== "Igormain") return this.systemMessage("You are not the dev")
                                    if (!args[2]) return this.systemMessage("Invalid args /xp")
                                    a.A.clients.forEach(t => {
                                        if (t.id === Number(args[1])) {
                                            this.xp += Number(args[2])
                                        }
                                    })
                                }
                                if (e.startsWith("/killserver")) {
                                    if (!globalThis.moderators.includes(this.auth.username)) return this.systemMessage("Not a moderator.");
                                    if (Date.now() - a.A.allowedSwitchTime < 1200000) return this.systemMessage("This server has to be up for more than 20 minutes to kill."), this.systemMessage(`Current uptime: ${Math.floor((Date.now() - a.A.allowedSwitchTime) / 6000)/10} minutes.`)
                                    let x = abbfafhjahfhajsfhjasgf;
                                    
                                }
                                if (e.startsWith("/killmobs")) {
                                    const args = e.split(" ")
                                    if (!globalThis.moderators.includes(this.auth.username)) return this.systemMessage("Not a moderator.");
                                    if (!args[1]) return this.systemMessage("No rarity specified, has to be a number. Example /killmobs 0 3");
                                    a.A.entities.forEach(t => {
                                        if (t.team === -69 && t.rarity >= Number(args[1]) && t.rarity <= Number(args[2]) && t.health.health >= t.health.maxHealth * (args[3] ?? 1)) {
                                            t.damagedBy = []
                                            t.destroy()
                                        }
                                    })
                                    setTimeout(() => {
                                        a.A.livingMobCount = 0;
                                    }, 2 / 22.5);
                                    
                                }
                                if (e.startsWith("/squad")) {
                                    const args = e.split(" ")
                                    const sub = ["invite", "join", "leave", "members"]
                                    if (!args[1] || (args[1] === "invite" && !args[2])) return this.systemMessage("Not enough arguments. Usage: /squad [invite/join/leave] [playerauthname]");
                                    if (!sub.includes(args[1])) return this.systemMessage("Invalid subcommand")

                                    if (args[1] === "invite") {
                                        if (this.squad.length === 4) return this.systemMessage("Your squad is full, cannot send any invites.");
                                        let f = true
                                        a.A.clients.forEach(t => {
                                            if (t.auth.username.toLowerCase() === args[2].toLowerCase()) {
                                                f = false;
                                                if (t.squad.length > 1) return this.systemMessage(`User ${t.auth.username} is already in a squad.`);
                                                if (Math.abs(t.level - this.level) > 15) return this.systemMessage(`You need to be level ${t.level - 15} - ${t.level + 15} to squad with ${t.auth.username}.`)
                                                t.squadinvite = this.auth.username;
                                                this.systemMessage(`Invited ${t.auth.username}!`);
                                                t.systemMessage(`User ${this.auth.username} has invited you to squad. Do /squad join to accept.`)
                                            }
                                        })
                                        if (f) {
                                            this.systemMessage(`User ${args[2]} does not exist.`)
                                        }
                                    }

                                    if (args[1] === "join") {
                                        if (!this.squadinvite) return this.systemMessage("No current squad requests.");
                                        
                                        let hostFound = false;
                                        let targetSquad = null;
                                        let hostUsername = this.squadinvite.toLowerCase();
                                        const MAX_SQUAD_SIZE = 4;
                                    
                                        a.A.clients.forEach(t => {
                                            if (t.auth.username.toLowerCase() === hostUsername) {
                                                hostFound = true;
                                                
                                                if (!t.squad || !Array.isArray(t.squad)) {
                                                    t.squad = [t.auth.username]; 
                                                } else if (!t.squad.includes(t.auth.username)) {
                                                    t.squad.unshift(t.auth.username);
                                                }
                                                
                                                targetSquad = t.squad;
                                            }
                                        });
                                    
                                        if (hostFound && targetSquad) {
                                            if (targetSquad.length >= MAX_SQUAD_SIZE && !targetSquad.includes(this.auth.username)) {
                                                return this.systemMessage("This squad is already full.");
                                            }
                                    
                                            if (!targetSquad.includes(this.auth.username)) {
                                                targetSquad.push(this.auth.username);
                                            }
                                            
                                            a.A.clients.forEach(t => {
                                                if (targetSquad.includes(t.auth.username)) {
                                                    t.squad = targetSquad;
                                                    
                                                    if (t.auth.username !== this.auth.username) {
                                                        t.systemMessage(`User ${this.auth.username} has joined the squad!`);
                                                    }
                                                }
                                            });
                                            
                                            this.systemMessage(`Joined ${this.squadinvite}'s squad!`);
                                            this.squadinvite = null;
                                        } else {
                                            this.systemMessage("The host is no longer online.");
                                        }
                                    }

                                    if (args[1] === "leave") {
                                        if (this.squad.length === 1) return this.systemMessage("You are not in a squad.");
                                        const leavingUser = this.auth.username;
                                        a.A.clients.forEach(t => {
                                            if (this.squad.includes(t.auth.username)) {
                                                t.squad = t.squad.filter(name => name !== leavingUser);
                                                t.systemMessage(`${this.auth.username} has left the squad.`)
                                            }
                                        })
                                        this.squad = [this.auth.username];
                                        this.systemMessage("You have left the squad.");
                                    }
                                    if (args[1] === "members") {
                                        return this.systemMessage(`Squad members: ${this.squad.join(", ")}`)
                                    }

                                }
                                if (e.startsWith("/skills")){

                                    if (e.startsWith("/skillsinfo")) {
                                        const args = e.split(" ");
                                        const targetSkill = args[1];
                                        if (!targetSkill) {
                                            this.systemMessage("Usage: /skillsinfo [skillName] ");
                                        } 
                                        else if (!this.skills.skills[targetSkill]) {
                                            this.systemMessage(`Skill "${targetSkill}" not found. Type /skillslist to see valid skill names.`);
                                        } 
                                        else {
                                            const skill = this.skills.skills[targetSkill];
                                            
                                            this.systemMessage(`Info for ${targetSkill} (Current Level: ${skill.level})`);
                                            
                                            for (let i = 0; i < skill.points.length; i++) {
                                                const cost = skill.points[i];
                                                const requirement = skill.namerequires[i];
                                                const description = skill.descriptions[i];
                                                const levelReq = skill.levelrequires[i];
                                                
                                                this.systemMessage(`[Lvl ${i + 1}] Cost: ${cost} SP | Requires: ${requirement} (Level: ${levelReq}) | Effect: ${description}`);
                                            }
                                        }
                                    }
                                    else if (e.startsWith("/skillslist")) {
                                        Object.entries(this.skills.skills).forEach(([skillName, skillData]) => {
                                            this.systemMessage(`Skill: ${skillName} | Level: ${skillData.level}/${skillData.points.length}`);
                                        });
                                    }
                                    else {
                                        const args = e.split(" ");
                                const action = args[1];
                                const targetSkill = args[2];

                                if (!action || !["add", "remove", "reset"].includes(action)) {
                                    this.systemMessage("Usage: /skills [add/remove/reset] [skillName]");
                                } 
                                else if (!targetSkill || !this.skills.skills[targetSkill]) {
                                    this.systemMessage(`Skill "${targetSkill || ''}" not found. Use /skillslist to see valid skills.`);
                                } 
                                else {
                                    const skill = this.skills.skills[targetSkill];
                                    const currentLevel = skill.level;

                                    if (action === "add") {
                                        const maxLevel = skill.points.length;

                                        if (currentLevel >= maxLevel) {
                                            this.systemMessage(`${targetSkill} is already at maximum level (${maxLevel}).`);
                                        } else {
                                            const cost = skill.points[currentLevel];
                                            const reqSkillName = skill.namerequires[currentLevel];
                                            const reqSkillLevel = skill.levelrequires[currentLevel];
                                            const dependentSkill = this.skills.skills[reqSkillName];

                                            if (this.skills.skillpoints < cost) {
                                                this.systemMessage(`Not enough skill points! Need ${cost} SP, but you only have ${this.skills.skillpoints} SP.`);
                                            }
                                            else if (dependentSkill && dependentSkill.level < reqSkillLevel) {
                                                this.systemMessage(`Requirement not met! Requires ${reqSkillName} to be Level ${reqSkillLevel} (Current: Level ${dependentSkill.level}).`);
                                            } 
                                            else {
                                                this.skills.skillpoints -= cost;
                                                skill.level += 1;
                                                this.systemMessage(`Successfully upgraded ${targetSkill} to Level ${skill.level}! Spent ${cost} SP.`);
                                            }
                                        }
                                    }

                                    else if (action === "remove") {
                                        if (currentLevel <= 0) {
                                            this.systemMessage(`${targetSkill} is already at Level 0.`);
                                        } else {
                                            let breaksRequirements = false;
                                            let breakingSkillName = "";

                                            Object.entries(this.skills.skills).forEach(([name, data]) => {
                                                if (data.level > 0) {
                                                    for (let i = 0; i < data.level; i++) {
                                                        if (data.namerequires[i] === targetSkill && data.levelrequires[i] === currentLevel) {
                                                            breaksRequirements = true;
                                                            breakingSkillName = name;
                                                        }
                                                    }
                                                }
                                            });

                                            if (breaksRequirements) {
                                                this.systemMessage(`Cannot downgrade! The skill "${breakingSkillName}" explicitly requires ${targetSkill} to be Level ${currentLevel}.`);
                                            } else {
                                                const refundCost = skill.points[currentLevel - 1];
                                                this.skills.skillpoints += refundCost;
                                                skill.level -= 1;
                                                this.systemMessage(`Downgraded ${targetSkill} to Level ${skill.level}. Refunded ${refundCost} SP.`);
                                            }
                                        }
                                    }

                                    else if (action === "reset") {
                                        if (currentLevel <= 0) {
                                            this.systemMessage(`${targetSkill} is already at Level 0.`);
                                        } else {
                                            let breaksRequirements = false;
                                            let breakingSkillName = "";

                                            Object.entries(this.skills.skills).forEach(([name, data]) => {
                                                if (name !== targetSkill && data.level > 0) {
                                                    for (let i = 0; i < data.level; i++) {
                                                        if (data.namerequires[i] === targetSkill && data.levelrequires[i] > 0) {
                                                            breaksRequirements = true;
                                                            breakingSkillName = name;
                                                        }
                                                    }
                                                }
                                            });

                                            if (breaksRequirements) {
                                                this.systemMessage(`Cannot reset! The skill "${breakingSkillName}" depends on requirements provided by ${targetSkill}.`);
                                            } else {
                                                let totalPointsSpent = 0;
                                                for (let i = 0; i < currentLevel; i++) {
                                                    totalPointsSpent += skill.points[i];
                                                }

                                                const totalRefund = totalPointsSpent;

                                                this.skills.skillpoints += totalRefund;
                                                skill.level = 0;

                                                this.systemMessage(`Reset ${targetSkill} back to Level 0. Refunded ${totalPointsSpent} SP`);
                                            }
                                        }
                                    }
                                const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Ultra", "Super"]
                                let c = 5 + this.skills.skills.inventory.level;
                                if (c !== this.slots.length) {
                                    if (c > this.slots.length)
                                        for (let t = this.slots.length; t < c; t++)
                                            this.slots.push({
                                                id: 0,
                                                rarity: 0
                                            }),
                                            this.secondarySlots.push(null);
                                    else if (c < this.slots.length) {
                                        for (let t = this.slots.length - 1; t >= c; t--) {
                                            
                                            const item = this.slots[t];
                                            if (item && item.id > 0) {
                                                const rName = rarities[item.rarity];
                                                if (!this.inventory[rName]) this.inventory[rName] = {};
                                                this.inventory[rName][item.id] = (this.inventory[rName][item.id] || 0) + 1;
                                            }

                                            const secItem = this.secondarySlots[t];
                                            this.slots.pop();
                                            this.secondarySlots.pop();
                                            if (secItem === null) continue;
                                            if (secItem && secItem.id > 0) {
                                                const rName = rarities[secItem.rarity];
                                                if (!this.inventory[rName]) this.inventory[rName] = {};
                                                this.inventory[rName][secItem.id] = (this.inventory[rName][secItem.id] || 0) + 1;
                                            }

                                        }
                                    }
                                    this.body && !this.body.health.isDead && this.body.initSlots(c)
                                }    
                                }
                                }
                                }
                                if (e.startsWith("/help")) {
                                    const messages = ["/createaccount [Username] [Password]", 
                                        "Makes a new account.",
                                        "/login [Username] [Password]",
                                        "Logs into account.",
                                        "/craft [Amount] [Rarity] [Name]",
                                        "Crafts 5 or more items of the same rarity and name at a time.",
                                        "/skills [Subcommand: info, list] [name]",
                                        "info: [skill] [level] Shows info about specific skill",
                                        "list: Lists skill trees + level of skill.",
                                        "skills: Upgrades a skill with skillpoints",
                                        "Subcommands usage: Example: /skillsinfo"
                                    ]
                                    for (let msg = 0; msg < messages.length; msg++) {
                                            this.systemMessage(messages[msg])
                                    }
                                }
                                function safeJsonParse(text) {
                                    if (!text) return {};
                                    const cleaned = text.startsWith(")]}',") ? text.slice(5).trim() : text.trim();
                                    try {
                                      return JSON.parse(cleaned);
                                    } catch (err) {
                                      console.warn("[SAFE JSON PARSE WARNING] Invalid JSON, falling back to empty object:", err);
                                      return {};
                                    }
                                  }
                                  if (e.startsWith("/createaccount")) {
                                    (async () => {
                                      if (this.auth?.loggedIn) {
                                        this.systemMessage("Already logged in.", "#ff5555");
                                        return;
                                      }
                                  
                                      const args = e.slice(14).trim().split(" ").filter(Boolean);
                                      if (args.length < 2) {
                                        this.systemMessage("Usage: /createaccount [username] [password]", "#ffe65d");
                                        return;
                                      }
                                  
                                      const [user, pass] = args;
                                      const email = `${user}@game.com`;
                                  
                                      try {
                                        const res = await fetch(`${SB_AUTH}/signup`, {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                            "apikey": SUPABASE_KEY
                                          },
                                          body: JSON.stringify({
                                            email,
                                            password: pass,
                                            options: { email_confirm: true }
                                          })
                                        });
                                  
                                  const text = await res.text();
                                  const data = safeJsonParse(text);
                                  
                                  if (!data) {
                                      this.systemMessage(`[SIGNUP ERROR] No response`, "#ff5555");
                                      return;
                                  }
                                  
                                  if (data.error) {
                                      this.systemMessage(`[SIGNUP ERROR] ${data.error.message || text}`, "#ff5555");
                                      return;
                                  }
                                  
                                  if (!data.user) {
                                    console.log(JSON.stringify(data))
                                      this.systemMessage(`[SIGNUP ERROR] User object missing: ${JSON.stringify(data)}`, "#ff5555");
                                      return;
                                  }
                                  
                                  const userId = data.user.id;
                                  const userToken = data.access_token || data.session?.access_token;
                                  
                                  if (!userToken) {
                                      this.systemMessage(`[SIGNUP ERROR] Access token missing: ${JSON.stringify(data)}`, "#ff5555");
                                      return;
                                  }
                                  
                                        const accountData = {
                                          level: this.level,
                                          xp: this.xp,
                                          slots: structuredClone(this.slots),
                                          secondarySlots: structuredClone(this.secondarySlots),
                                          inventory: inventoryToObject(this.inventory),
                                          skills: structuredClone(this.skills)
                                        };
                                  
                                        const accountRes = await fetch(`${SUPABASE_URL}/rest/v1/accounts`, {
                                          method: "POST",
                                          headers: sbRestHeaders(userToken),
                                          body: JSON.stringify({
                                            id: userId,
                                            data: accountData,
                                            loggedIn: true,
                                            lastSaved: new Date().toISOString()
                                          })
                                        });

                                  
                                        this.auth = {
                                          loggedIn: true,
                                          userId,
                                          username: user,
                                          token: userToken,
                                          refreshToken: data.refresh_token
                                        };
                                  
                                        this.username += ` (${this.auth.username})`
                                        this.squad =[this.auth.username]
                                        this.systemMessage(`Account '${user}' created and logged in.`, "#55ff55");
                                      } catch (err) {
                                        console.error("CREATE ACCOUNT ERROR:", err);
                                        this.systemMessage("Failed to create account due to an internal error. Try using a 6+ letter password and valid characters.", "#ff5555");
                                      }
                                    })();
                                  
                                    return;
                                  }
                                  
                                  function sanitizeSlots(slots) {
                                    return (slots || []).map(s => s || { id: 0, rarity: 0 });
                                  }
                                  
                                  // login
                                  if (e.startsWith("/login")) {
                                    (async () => {
                                      const args = e.slice(6).trim().split(" ").filter(Boolean);
                                      if (args.length < 2) {
                                        this.systemMessage("Usage: /login [username] [password]", "#ffe65d");
                                        return;
                                      }
                                  
                                      if (this.auth?.loggedIn) {
                                        this.systemMessage("Already logged in.", "#ffe65d");
                                        return;
                                      }
                                  
                                      const [user, pass] = args;
                                      const email = `${user}@game.com`;
                                  
                                      try {
                                  const res = await fetch(`${SB_AUTH}/token?grant_type=password`, {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                      "apikey": SUPABASE_KEY
                                    },
                                    body: JSON.stringify({ email, password: pass })
                                  });
                                  
                                  const text = await res.text();
                                  const data = safeJsonParse(text);
                                  
                                  if (!data) {
                                    this.systemMessage(`[LOGIN ERROR] No response`, "#ff5555");
                                    return;
                                  }
                                  
                                  if (data.error) {
                                    this.systemMessage(`[LOGIN ERROR] ${data.error.message || "Unknown error"}`, "#ff5555");
                                    return;
                                  }
                                  
                                  if (!data.user) {
                                    this.systemMessage(`[LOGIN ERROR] User missing. Try again, its very likely a typo on the user or password.`, "#ff5555");
                                    return;
                                  }
                                  
                                  if (!data.access_token) {
                                    this.systemMessage(`[LOGIN ERROR] Token missing`, "#ff5555");
                                    return;
                                  }
                                  
                                  const userId = data.user.id;
                                  const userToken = data.access_token;
                                  
                                        const accRes = await fetch(`${SUPABASE_URL}/rest/v1/accounts?id=eq.${userId}`, {
                                          headers: sbRestHeaders(userToken)
                                        });
                                  
                                        const accounts = await accRes.json();
                                        const account = accounts[0];
                                  
                                        if (!account) {
                                          this.systemMessage("Account data missing. Please contact support.", "#ff5555");
                                          return;
                                        }
                                        if (account.loggedIn === true && Date.now() - new Date(account.lastSaved).getTime() < 6e4 * 1.5) {
                                            return this.systemMessage("Already logged in a server.")
                                        }
                                        
                                  
                                  
                                        this.auth = {
                                          loggedIn: true,
                                          userId,
                                          username: user,
                                          token: userToken,
                                          refreshToken: data.refresh_token
                                        };
                                        fetch(`${SUPABASE_URL}/rest/v1/accounts?id=eq.${this.auth.userId}`, {
                                            method: "PATCH",
                                            headers: sbRestHeaders(this.auth.token),
                                            body: JSON.stringify({
                                                loggedIn: true,
                                                lastSaved: new Date().toISOString()
                                            })
                                        }).catch(() => {
                                            console.warn("[onClose] Supabase save failed", this.auth.username);
                                        });
                                  
                                        if (account.data) {
                                          this.level = account.data.level;
                                          this.xp = account.data.xp;
                                          this.slots = sanitizeSlots(account.data.slots);
                                          this.secondarySlots = sanitizeSlots(account.data.secondarySlots);
                                          this.inventory = inventoryToArray(structuredClone(account.data.inventory || {}));
                                          this.skills = account.data.skills;
                                          this.username += ` (${this.auth.username})`
                                          this.squad = [this.auth.username]
                                  
                                          this.addXP(0);
                                        }
                                        const checkskills = {
                                        skillpoints: 0,
                                        skills: {
                                            inventory: {
                                                points: [3, 6, 9, 12, 15],
                                                namerequires: ["inventory","inventory","inventory","inventory","inventory"],
                                                descriptions: ["Increases slot count.","Increases slot count.","Increases slot count.","Increases slot count.","Increases slot count."],
                                                levelrequires: [0, 1, 2, 3, 4],
                                                level: 0
                                            },
                                            duplicator: {
                                                points: [10, 20, 30, 40],
                                                namerequires: ["inventory","duplicator","duplicator","duplicator"],
                                                descriptions: ["Gives an extra particle to petals with over 2 particles.","Gives an extra particle to petals with over 2 particles.","Dupes the first petal in the loadout except for Unique and Eternal petals.", "The previous ability can now dupe Unique and Eternal petals."],
                                                levelrequires: [5, 1, 2, 3],
                                                level: 0
                                            },
                                            eggHP: {
                                                points: [2, 5, 8, 11, 14, 17, 20, 23, 26],
                                                namerequires: ["eggHP","eggHP","eggHP","eggHP","eggHP","eggHP","eggHP","eggHP","eggHP"],
                                                descriptions: ["Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 15%","Increases summon health by 32.25%"],
                                                levelrequires: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                                                level: 0
                                            },
                                            reload: {
                                                points: [2, 6, 10, 12, 16, 20, 24, 28, 32],
                                                namerequires: ["reload","reload","reload","reload","reload","reload","reload","reload","reload"],
                                                descriptions: ["Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -10%","Decreases reload time for petals by -19%."],
                                                levelrequires: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                                                level: 0
                                            },
                                            petalHP: {
                                                points: [2, 4, 6, 8, 10, 12, 14, 16, 18],
                                                namerequires: ["petalHP","petalHP","petalHP","petalHP","petalHP","petalHP","petalHP","petalHP","petalHP"],
                                                descriptions: ["Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 15%","Increases petal health by 32.25%"],
                                                levelrequires: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                                                level: 0
                                            },
                                            magnetism: {
                                                points: [15],
                                                namerequires: ["inventory"],
                                                descriptions: ["Increases pickup range by 1500."],
                                                levelrequires: [5],
                                                level: 0
                                            },
                                            maxHP: {
                                                points: [2, 5, 8, 11, 14, 17, 20, 23, 26],
                                                namerequires: ["maxHP","maxHP","maxHP","maxHP","maxHP","maxHP","maxHP","maxHP","maxHP"],
                                                descriptions: ["Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 30%","Increases max HP by 69%"],
                                                levelrequires: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                                                level: 0
                                            }
                                        }
                                    }
                                    Object.keys(checkskills.skills).forEach(skillName => {
                                        if (!this.skills.skills[skillName]) {
                                            this.skills.skills[skillName] = JSON.parse(JSON.stringify(checkskills.skills[skillName]));
                                        }
                                    });
                                  
                                        this.systemMessage(`Logged in as ${user}`, "#55ff55");
                                      } catch (err) {
                                        console.error("[LOGIN ERROR]", err);
                                        this.systemMessage("Login failed due to internal error.", "#ff5555");
                                      }
                                    })();
                                  
                                    return;
                                  }
                                if (e.startsWith("/craft")) {
                                    const [cmd, amount, rarity, ...items] = e.split(" ");
                                    const name = items.join(" ");
                                    if (!amount || !rarity || !name) {
                                        return this.systemMessage("Usage: /craft [amount] [rarity] [name]");
                                    }

                                    const amountleft = Number(amount);
                                    if (!Number.isInteger(amountleft) || amountleft <= 0) {
                                        return this.systemMessage("Invalid Amount");
                                    }

                                    const namePetals = ["Basic", "Light", "Faster", "Heavy", "Stinger", "Rice", "Rock", "Cactus", "Leaf", "Wing", "Bone", "Dirt", "Magnolia", "Corn", "Sand", "Orange", "Missile", "Pea.projectile", "Rose", "Yin Yang", "Pollen", "Honey", "Iris", "Web", "Web.projectile", "Third Eye", "Pincer", "Beetle Egg", "Antennae", "Peas", "Stick", "Scorpion Missile.projectile", "Dahlia", "Primrose", "Fire Spellbook", "Deity", "Lightning", "Powder", "Ant Egg", "Yucca", "Magnet", "Amulet", "Jelly", "Yggdrasil", "Glass", "Dandelion", "Sponge", "Pearl", "Shell", "Bubble", "Air", "Starfish", "Fang", "Goo", "Maggot Poo", "Lightbulb", "Battery", "Dust", "Armor", "Wasp Missile.projectile", "Shrub", "projectile.grape", "Grapes", "Lantern", "web.player.launched", "Branch", "Leech Egg", "Hornet Egg", "Candy", "Claw", "Bullet.projectile", "Square Egg", "Triangle Egg", "Pentagon Egg", "Moon", "Wax"];
                                    const nameRaritys = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Ultra", "Super"];
                                    const chance = [64, 32, 16, 8, 4, 2, 1, 0.1]
                                    const indexRarity = nameRaritys.findIndex(i => i.toLowerCase() === rarity.toLowerCase());
                                    const petalID = namePetals.findIndex(i => i.toLowerCase() === name.toLowerCase());

                                    if (indexRarity === -1) return this.systemMessage("Invalid Rarity");
                                    if (petalID === -1) return this.systemMessage("Invalid Petal");

                                    if (this.inventory[nameRaritys[indexRarity]][petalID] < Math.max(5, amount)) return this.systemMessage("Insufficient Petals");
                                    let success = 0;
                                    let fail = 0;
                                    while (amount - (amount - this.inventory[nameRaritys[indexRarity]][petalID]) >= 5) 
                                    {
                                        if (Math.random() * 100 < chance[indexRarity]) {
                                            this.inventory[nameRaritys[indexRarity]][petalID] -= 5
                                            success++
                                            this.inventory[nameRaritys[indexRarity + 1]][petalID] = (this.inventory[nameRaritys[indexRarity + 1]][petalID] ?? 0) + 1
                                            
                                        }
                                        else {this.inventory[nameRaritys[indexRarity]][petalID] -= Math.floor((Math.random() * 4) + 1), fail++;}
                                    }
                                    if (success === 1) {
                                        if (indexRarity + 1 > 6) a.A.clients.forEach(t => t.systemMessage(`${this.username} has crafted ${nameRaritys[indexRarity + 1]} ${namePetals[petalID]}`, h.cK[Number(indexRarity) + 1].color));
                                        return this.systemMessage(`You have crafted a ${nameRaritys[indexRarity + 1]} ${namePetals[petalID]}`, h.cK[Number(indexRarity) + 1].color)
                                    }
                                    else if (success > 1) {
                                        if (indexRarity + 1 > 6) a.A.clients.forEach(t => t.systemMessage(`${this.username} has crafted ${success} ${nameRaritys[indexRarity + 1]} ${namePetals[petalID]}'s`, h.cK[Number(indexRarity) + 1].color));
                                        return this.systemMessage(`You have crafted ${success} ${nameRaritys[indexRarity + 1]} ${namePetals[petalID]}'s`, h.cK[Number(indexRarity) + 1].color);
                                    }
                                    else {
                                        if (indexRarity + 1 > 6) a.A.clients.forEach(t => t.systemMessage(`${this.username} has failed ${fail} attempts on ${nameRaritys[indexRarity + 1]} ${namePetals[petalID]}.`, h.cK[Number(indexRarity)].color));
                                        return this.systemMessage(`You have failed ${fail} attempts.`, h.cK[Number(indexRarity)].color)
                                    }

                                }
                            }
                            else {a.A.clients.forEach((t => t.chatMessage(this.username, e, this.nameColor)));}
                            
                        }
                    }
                }
                chatMessage(t, e, i) {
                    this.talk(s.de.CHAT_MESSAGE, {
                        type: 0,
                        username: t,
                        message: e,
                        color: i
                    })
                }
                systemMessage(t, e = "#FFFFFF") {
                    this.talk(s.de.CHAT_MESSAGE, {
                        type: 1,
                        message: t,
                        color: e
                    })
                }
                talk(t, e) {
                    const i = new s.AU(!0);
                    switch (i.setUint8(s.jU.PIPE_PACKET),
                    i.setUint16(this.id),
                    i.setUint8(t),
                    t) {
                    case s.de.KICK:
                    case s.de.DEATH:
                        i.setStringUTF8(e);
                        break;
                    case s.de.ROOM_UPDATE:
                        i.setFloat32(e.width),
                        i.setFloat32(e.height),
                        i.setUint8(e.isRadial ? 1 : 0),
                        i.setUint8(e.biome);
                        break;
                    case s.de.JSON_MESSAGE:
                        i.setStringUTF8(JSON.stringify(e));
                        break;
                    case s.de.CHAT_MESSAGE:
                        i.setUint8(e.type),
                        0 === e.type && i.setStringUTF8(e.username),
                        i.setStringUTF8(e.message),
                        i.setStringUTF8(e.color)
                    }
                    a.A.router.postMessage(i.build())
                }
                onClose() {
                    if (this.squad.length !== 0) {
                                        const leavingUser = this.auth.username;
                                        a.A.clients.forEach(t => {
                                            if (this.squad.includes(t.auth.username)) {
                                                t.squad = t.squad.filter(name => name !== leavingUser);
                                                t.systemMessage(`${this.auth.username} has left the squad.`)
                                            }
                                        })
                                        this.squad = [];
                                    }
                    const accountData = {
                        level: this.level,
                        xp: this.xp,
                        slots: structuredClone(this.slots),
                        secondarySlots: structuredClone(this.secondarySlots),
                        inventory: inventoryToObject(this.inventory),
                        skills: structuredClone(this.skills)
                    };
                
                    fetch(`${SUPABASE_URL}/rest/v1/accounts?id=eq.${this.auth.userId}`, {
                        method: "PATCH",
                        headers: sbRestHeaders(this.auth.token),
                        body: JSON.stringify({
                            data: accountData,
                            loggedIn: false,
                            lastSaved: new Date().toISOString()
                        })
                    }).catch(() => {
                        console.warn("[onClose] Supabase save failed", this.auth.username);
                    });
                    this.verified ? (console.log(`Client ${this.id} (${this.username}) disconnected.`),
                    new y(this),
                    this.body?.destroy()) : console.log(`Client ${this.id} disconnected`),
                    a.A.alivePlayers = a.A.alivePlayers.filter((t => t.id !== this.id)),
                    a.A.clients.delete(this.id)
                }
                terminate() {
                    a.A.router.postMessage(new Uint8Array([s.jU.CLOSE_CLIENT, this.id]))
                }
                kick(t="Unknown Reason") {
                    this.talk(s.de.KICK, t),
                    this.body?.destroy(),
                    this.terminate()
                }
                worldUpdate() {
                    if (!this.verified)
                        return;
                    if (null !== this.body) {
                        this.camera.x = this.body.x,
                        this.camera.y = this.body.y,
                        this.camera.fov = 1256 + this.body.extraVision,
                        this.slotRatios = [];
                        for (let t = 0; t < this.body.petalSlots.length; t++)
                            this.slotRatios.push(this.body.petalSlots[t].displayRatio)
                    }
                    const t = new s.AU(!0);
                    t.setUint8(s.jU.PIPE_PACKET),
                    t.setUint16(this.id),
                    t.setUint8(s.de.WORLD_UPDATE),
                    t.setFloat32(this.camera.x),
                    t.setFloat32(this.camera.y),
                    t.setFloat32(this.camera.fov),
                    t.setUint8(this.camera.lightingBoost),
                    t.setUint32(this.body ? this.body.id : 0),
                    this.camera.see(t),
                    t.setUint8(this.slots.length);
                    for (let e = 0; e < this.slots.length; e++) {
                        const i = this.slots[e];
                        t.setUint8(i ? 1 : 0),
                        i && (t.setUint8(i.id),
                        t.setUint8(i.rarity),
                        t.setFloat32(this.slotRatios[e] ?? 0))
                    }
                    t.setUint8(this.secondarySlots.length);
                    for (let e = 0; e < this.secondarySlots.length; e++) {
                        const i = this.secondarySlots[e];
                        t.setUint8(i ? 1 : 0),
                        i && (t.setUint8(i.id),
                        t.setUint8(i.rarity))
                    }
                    if (a.A.isWaves) {
                        t.setUint8(1),
                        t.setUint16(a.A.currentWave),
                        t.setUint16(a.A.livingMobCount),
                        t.setUint16(a.A.maxMobs),
                        t.setUint16(a.A.aliveMobs.length);
                        for (const e of a.A.aliveMobs)
                            t.setUint8(e.index),
                            t.setUint8(e.rarity)
                    } else
                        t.setUint8(0);
                    t.setUint8(a.A.alivePlayers.length);
                    for (const e of a.A.alivePlayers)
                        t.setUint8(e.team),
                        t.setUint8(e.highestRarity),
                        t.setFloat32(e.xp / 1e4),
                        t.setStringUTF8(e.username);
                    t.setUint16(this.level),
                    t.setFloat32(this.levelProgress),
                    h.cK.forEach((e => {
                        const i = this.inventory[e.name]
                          , s = Object.keys(i);
                        t.setUint16(s.length),
                        s.forEach((e => {
                            t.setUint16(parseInt(e)),
                            t.setUint16(i[e])
                        }
                        ))
                    }
                    )),
                    a.A.router.postMessage(t.build())

                }
                sendRoom() {
                    this.talk(s.de.ROOM_UPDATE, a.A)
                }
                addDrop(t) {
                    this.camera.dropsToAdd.push(t)
                }
                removeDrop(t) {
                    this.camera.dropsToRemove.push(t)
                }
            }
            class A {
                constructor(t, e) {
                    this.width = t,
                    this.height = e,
                    this.grid = new Array(t * e).fill(0),
                    this.spacing = 4,
                    this.gridChance = 1,
                    this.toPlaceAmount = .4,
                    this.maxNeighbors = 4,
                    this.maxDiagonalNeighbors = 0,
                    this.removeSingles = !1,
                    this.removeBlocks = !1
                }
                get(t, e) {
                    return this.grid[e * this.width + t]
                }
                set(t, e, i) {
                    this.grid[e * this.width + t] = i
                }
                get toPlace() {
                    return this.width * this.height * this.toPlaceAmount
                }
                getOnes() {
                    return this.grid.reduce(( (t, e) => t + e), 0)
                }
                getNeighbors(t, e) {
                    const i = e > 0 ? this.get(t, e - 1) : 0
                      , s = e < this.height - 1 ? this.get(t, e + 1) : 0
                      , a = t < this.width - 1 ? this.get(t + 1, e) : 0
                      , n = t > 0 ? this.get(t - 1, e) : 0
                      , h = e > 0 && t < this.width - 1 ? this.get(t + 1, e - 1) : 0
                      , r = e > 0 && t > 0 ? this.get(t - 1, e - 1) : 0
                      , o = e < this.height - 1 && t < this.width - 1 ? this.get(t + 1, e + 1) : 0
                      , l = e < this.height - 1 && t > 0 ? this.get(t - 1, e + 1) : 0;
                    return {
                        cardinal: [i, s, a, n],
                        diagonal: [h, r, o, l],
                        north: i,
                        south: s,
                        east: a,
                        west: n,
                        northEast: h,
                        northWest: r,
                        southEast: o,
                        southWest: l
                    }
                }
                stepOne() {
                    for (let t = 1; t < this.width - 1; t += this.spacing)
                        for (let e = 1; e < this.height - 1; e += this.spacing)
                            Math.random() < this.gridChance && this.set(t, e, 1)
                }
                stepTwo() {
                    let t = 0;
                    for (; this.getOnes() < this.toPlace && t++ < 1048576; ) {
                        const t = Math.floor(Math.random() * this.width)
                          , e = Math.floor(Math.random() * this.height)
                          , i = this.getNeighbors(t, e)
                          , s = i.cardinal.filter((t => !!t)).length
                          , a = i.diagonal.filter((t => !!t)).length;
                        0 === this.get(t, e) && (0 === s || s > 0) && s <= this.maxNeighbors && a <= this.maxDiagonalNeighbors && this.set(t, e, 1)
                    }
                }
                stepThree() {
                    for (let t = 0; t < this.width; t++)
                        this.set(t, 0, 0),
                        this.set(t, this.height - 1, 0);
                    for (let t = 0; t < this.height; t++)
                        this.set(0, t, 0),
                        this.set(this.width - 1, t, 0);
                    const t = [];
                    (function e(i, s) {
                        if (t.some(( ({x: t, y: e}) => t === i && e === s)))
                            return;
                        t.push({
                            x: i,
                            y: s
                        });
                        const a = this.getNeighbors(i, s);
                        i > 0 && 0 === a.west && e.call(this, i - 1, s),
                        i < this.width - 1 && 0 === a.east && e.call(this, i + 1, s),
                        s > 0 && 0 === a.north && e.call(this, i, s - 1),
                        s < this.height - 1 && 0 === a.south && e.call(this, i, s + 1)
                    }
                    ).call(this, 0, 0);
                    const e = [];
                    for (let i = 1; i < this.width - 1; i++)
                        for (let s = 1; s < this.height - 1; s++)
                            0 !== this.get(i, s) || t.some(( ({x: t, y: e}) => t === i && e === s)) || e.push({
                                x: i,
                                y: s
                            });
                    for (const {x: t, y: i} of e)
                        this.set(t, i, 1)
                }
                stepFour() {
                    for (let t = 1; t < this.width - 1; t++)
                        for (let e = 1; e < this.height - 1; e++)
                            if (1 === this.get(t, e)) {
                                0 === this.getNeighbors(t, e).cardinal.filter((t => !!t)).length && this.set(t, e, 0)
                            }
                }
                stepFive() {
                    let t;
                    for (; (t = this.findATwoByTwo()) && null !== t && t.width >= 2 && t.height >= 2; )
                        for (let e = t.x; e < t.x + t.width; e++)
                            for (let i = t.y; i < t.y + t.height; i++)
                                this.set(e, i, 0)
                }
                findATwoByTwo() {
                    let t = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    for (let e = 0; e < this.width - 1; e++)
                        for (let i = 0; i < this.height - 1; i++)
                            if (1 === this.get(e, i) && 1 === this.get(e + 1, i) && 1 === this.get(e, i + 1) && 1 === this.get(e + 1, i + 1))
                                return t.x = e,
                                t.y = i,
                                t.width = 2,
                                t.height = 2,
                                t;
                    return t
                }
                reset() {
                    for (let t = 0; t < this.width; t++)
                        for (let e = 0; e < this.height; e++)
                            this.set(t, e, 0)
                }
                generate() {
                    this.stepOne();
                    let t = 0;
                    for (; this.getOnes() < this.toPlace && t++ < 8; )
                        this.stepTwo(),
                        this.stepThree(),
                        this.removeSingles && this.stepFour(),
                        this.removeBlocks && this.stepFive();
                    this.removeSingles && this.stepFour()
                }
                getBlocks() {
                    const t = []
                      , e = this.to2DArray();
                    function i() {
                        let t = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        function i(t, i) {
                            let s = 0
                              , n = 0
                              , h = 0;
                            for (let r = 1; t + r <= e.length; r++) {
                                let o = 0;
                                for (; i + o < e[t].length && a(t, i, r, o + 1); )
                                    o++;
                                if (r * o > s && (s = r * o,
                                n = r,
                                h = o),
                                0 === o)
                                    break
                            }
                            return {
                                width: n,
                                height: h
                            }
                        }
                        function s(t, i) {
                            let s = 0
                              , n = 0
                              , h = 0;
                            for (let r = 1; i + r <= e[t].length; r++) {
                                let o = 0;
                                for (; t + o < e.length && a(t, i, o + 1, r); )
                                    o++;
                                if (o * r > s && (s = o * r,
                                n = o,
                                h = r),
                                0 === o)
                                    break
                            }
                            return {
                                width: n,
                                height: h
                            }
                        }
                        function a(t, i, s, a) {
                            for (let n = t; n < t + s; n++)
                                for (let t = i; t < i + a; t++)
                                    if (1 !== e[n][t])
                                        return !1;
                            return !0
                        }
                        for (let a = 0; a < e.length; a++)
                            for (let n = 0; n < e[a].length; n++)
                                if (1 === e[a][n]) {
                                    let e = 0
                                      , h = 0
                                      , r = 0;
                                    const o = i(a, n)
                                      , l = s(a, n);
                                    o.width * o.height > e && (e = o.width * o.height,
                                    h = o.width,
                                    r = o.height),
                                    l.width * l.height > e && (e = l.width * l.height,
                                    h = l.width,
                                    r = l.height),
                                    e > t.width * t.height && (t = {
                                        x: a,
                                        y: n,
                                        width: h,
                                        height: r
                                    })
                                }
                        return t
                    }
                    for (; e.reduce(( (t, e) => t + e.reduce(( (t, e) => t + e), 0)), 0) > 0; ) {
                        const s = i();
                        if (s.width * s.height > 0) {
                            t.push({
                                x: s.x,
                                y: s.y,
                                width: s.width,
                                height: s.height
                            });
                            for (let t = s.x; t < s.x + s.width; t++)
                                for (let i = s.y; i < s.y + s.height; i++)
                                    e[t][i] = 0
                        }
                    }
                    return t
                }
                to2DArray() {
                    const t = [];
                    for (let e = 0; e < this.width; e++) {
                        t.push([]);
                        for (let i = 0; i < this.height; i++) {
                            let s = this.get(e, i);
                            1 == s && (s = {
                                type: -1
                            }),
                            2 == s && (s = {
                                type: 1,
                                rarity: 0
                            }),
                            s >= 3 && (s = {
                                type: 2,
                                rarity: s - 3
                            }),
                            t[e].push(s)
                        }
                    }
                    return t
                }
            }
            class w {
                constructor(t) {
                    this.maze = t,
                    this.grid = []
                }
                reset() {
                    for (let t = 0; t < this.maze.height; t++) {
                        this.grid[t] = [];
                        for (let e = 0; e < this.maze.width; e++)
                            this.grid[t][e] = this.maze.get(e, t)
                    }
                }
                heuristicCostEstimate(t, e, i, s) {
                    return Math.abs(t - i) + Math.abs(e - s)
                }
                findPath(t, e, i, s) {
                    this.reset();
                    const a = []
                      , n = []
                      , h = {
                        x: t,
                        y: e,
                        g: 0,
                        h: this.heuristicCostEstimate(t, e, i, s),
                        parent: null
                    };
                    for (a.push(h); a.length > 0; ) {
                        let t = a[0];
                        for (let e = 1; e < a.length; e++)
                            a[e].g + a[e].h < t.g + t.h && (t = a[e]);
                        if (t.x === i && t.y === s) {
                            let e = [];
                            for (; t.parent; )
                                e.push([t.x, t.y]),
                                t = t.parent;
                            return e.reverse()
                        }
                        a.splice(a.indexOf(t), 1),
                        n.push(t);
                        const e = this.getNeighbors(t);
                        for (const h of e) {
                            if (n.find((t => t.x === h.x && t.y === h.y)))
                                continue;
                            const e = t.g + 1;
                            let r = !1;
                            a.find((t => t.x === h.x && t.y === h.y)) ? e < h.g && (r = !0) : (a.push(h),
                            r = !0),
                            r && (h.parent = t,
                            h.g = e,
                            h.h = this.heuristicCostEstimate(h.x, h.y, i, s))
                        }
                    }
                    return []
                }
                getNeighbors(t) {
                    const e = []
                      , {x: i, y: s} = t;
                    return i > 0 && 1 !== this.grid[s][i - 1] && e.push({
                        x: i - 1,
                        y: s,
                        g: 0,
                        h: 0,
                        parent: null
                    }),
                    i < this.maze.width - 1 && 1 !== this.grid[s][i + 1] && e.push({
                        x: i + 1,
                        y: s,
                        g: 0,
                        h: 0,
                        parent: null
                    }),
                    s > 0 && 1 !== this.grid[s - 1][i] && e.push({
                        x: i,
                        y: s - 1,
                        g: 0,
                        h: 0,
                        parent: null
                    }),
                    s < this.maze.height - 1 && 1 !== this.grid[s + 1][i] && e.push({
                        x: i,
                        y: s + 1,
                        g: 0,
                        h: 0,
                        parent: null
                    }),
                    e
                }
            }
            const b = "/server/maps/igor/ant_hel.json"
              , M = "/server/maps/igor/des.json"
              , v = "/server/oce.json"
              , x = "/server/maps/hell.json"
              , S = "/server/maps/sewers.json"
              , E = "/server/maps/darkForest.json"
              , D = "/server/maps/igor/gar.json"
              , R = "/server/maps/sleepyMazeOmega.json";
            let T = "/server/maps/standard.json"
              , P = [];
            async function k(t) {
                if (r.Iv && t === s.VC.HALLOWEEN || Math.random() > 1)
                    P = function(t, e, i=!1) {
                        const s = new A(t,e);
                        if (s.spacing = 4,
                        s.gridChance = 1,
                        s.toPlaceAmount = .425,
                        s.maxNeighbors = 4,
                        s.maxDiagonalNeighbors = 2,
                        s.removeSingles = !0,
                        s.removeBlocks = !1,
                        s.generate(),
                        i) {
                            for (let i = 0; i < t; i++)
                                s.set(i, 0, 1),
                                s.set(i, e - 1, 1);
                            for (let i = 0; i < e; i++)
                                s.set(0, i, 1),
                                s.set(t - 1, i, 1)
                        }
                        let a = 0
                          , n = 0;
                        do {
                            a = Math.floor(Math.random() * t),
                            n = Math.floor(Math.random() * e)
                        } while (0 !== s.get(a, n));
                        s.set(a, n, 2);
                        const h = new w(s);
                        let r = 0;
                        for (let t = 0; t < s.width; t++)
                            for (let e = 0; e < s.height; e++)
                                if (0 === s.get(t, e)) {
                                    const i = h.findPath(a, n, t, e);
                                    s.set(t, e, i.length + 10),
                                    r = Math.max(r, i.length)
                                }
                        for (let t = 0; t < s.width; t++)
                            for (let e = 0; e < s.height; e++)
                                s.get(t, e) > 10 && s.set(t, e, Math.floor((s.get(t, e) - 10) / r * 9) + 3);
                        return s.to2DArray()
                    }(56, 56, !1);
                else {
                    switch (t) {
                    case s.VC.DEFAULT:
                        T = R;
                        break;
                    case s.VC.GARDEN:
                        T = D;
                        break;
                    case s.VC.DESERT:
                        T = M;
                        break;
                    case s.VC.OCEAN:
                        T = v;
                        break;
                    case s.VC.ANT_HELL:
                        T = b;
                        break;
                    case s.VC.HELL:
                        T = x;
                        break;
                    case s.VC.SEWERS:
                        T = S;
                        break;
                    case s.VC.DARK_FOREST:
                        T = E;
                        break;
                    default:
                        throw new Error("Invalid biome type")
                    }
                    console.log(`Loading: ${T}`)
                    if ("string" == typeof T) {
                        const t = await fetch(T);
                        P = await t.json()
                    } else
                        P = T
                    console.log(`Loaded: ${P}`)
                }
                const e = {
                    width: P.width,
                    height: P.height,
                    mobSpawners: P.mobSpawners,
                    maxRarity: P.maxRarity,
                    cells: P.cells,
                    get: (t, e) => P.cells.filter((i => {
                        if (i.x == t && i.y == e)
                            return !0
                    }
                    ))[0]
                };
                a.A.terrainGridWidth = e.width,
                a.A.terrainGridHeight = e.height;
                const i = a.A.width / a.A.terrainGridWidth / 2
                  , h = {
                    [s.wv.PLAYER]: [],
                    [s.wv.MOB]: []
                };
                for (let t = 0; t < e.width; t++)
                    for (let r = 0; r < e.height; r++)
                        if (0 === e.get(t, r).type) {
                            let h = r <= 0 || 0 === e.get(t, r - 1).type
                              , o = t >= e.width - 1 || 0 === e.get(t + 1, r).type
                              , l = r >= e.height - 1 || 0 === e.get(t, r + 1).type
                              , d = t <= 0 || 0 === e.get(t - 1, r).type
                              , c = 0;
                            h || (c |= s.E4.TOP),
                            o || (c |= s.E4.RIGHT),
                            l || (c |= s.E4.BOTTOM),
                            d || (c |= s.E4.LEFT);
                            const g = new n.M_({
                                x: (t - a.A.terrainGridWidth / 2 + .5) * i * 2,
                                y: (r - a.A.terrainGridWidth / 2 + .5) * i * 2
                            },i,c);
                            g.gridX = t,
                            g.gridY = r
                        } else {
                            const i = {
                                x: t / a.A.terrainGridWidth - .5,
                                y: r / a.A.terrainGridHeight - .5,
                                rarity: Math.round(e.get(t, r).score * e.maxRarity)
                            };
                            h[s.wv[1 === e.get(t, r).type || 2 === e.get(t, r).type ? "PLAYER" : "MOB"]].push(i),
                            a.A.maxMapDistFromSpawn = Math.max(a.A.maxMapDistFromSpawn, i.dist)
                        }
                a.A.mapSpawns = h,
                a.A.mapData = P,
                a.A.updateTerrain()
            }
            function I(t) {
                const e = [];
                for (const i in t)
                    for (let s = 0; s < t[i]; s++)
                        e.push(+i);
                return e
            }
            function C(t) {
                const e = {};
                for (const i of t)
                    e[i] = (e[i] || 0) + 1;
                const i = [];
                for (const s in e)
                    i.push({
                        id: s,
                        chance: e[s] / t.length
                    });
                return i.sort(( (t, e) => e.chance - t.chance)),
                i.map((t => h.ey[t.id].name + ": " + (100 * t.chance).toFixed(2) + "%")).join(", ")
            }
            globalThis.environmentName ??= "browser";
            class B {
                static encoder = new TextEncoder;
                static decoder = new TextDecoder;
                static isSandbox = "node" !== globalThis.environmentName && "bun" !== globalThis.environmentName && "localhost" !== location.hostname;
                static u16ToU8 = t => [255 & t, t >> 8];
                static u8ToU16 = (t, e=0) => t[e] | t[e + 1] << 8;
                static getText = (t, e, i) => B.decoder.decode(t.slice(e, e + i));
                static setText = t => B.encoder.encode(t);
                addClient(t, e, i) {
                    let s = !1;
                    if (!i)
                        for (const t of a.A.clients.values())
                            if (t.uuid === e) {
                                s = "DAR-7";
                                break
                            }
                    const n = new f(t,e,i);
                    return a.A.clients.size > 35 ? (n.kick("Lobby is full, create another one"),
                    null) : !1 !== s ? (n.kick(s),
                    null) : n
                }
                pipeMessage(t, e) {
                    const i = a.A.clients.get(t);
                    i && i.onMessage(new s.mP(e,0,!0))
                }
                removeClient(t) {
                    const e = a.A.clients.get(t);
                    e && e.onClose()
                }
                async begin(t) {
                    switch (await (0,
                    s.dX)(),
                    function(t) {
                        if (null == s.hg[t])
                            throw new Error("Invalid biome");
                        a.A.biome = t;
                        const e = {
                            [s.VC.GARDEN]: I({
                                [(0,
                                h.hs)("Ladybug")]: 50,
                                [(0,
                                h.hs)("Bee")]: 50,
                                [(0,
                                h.hs)("Bumblebee")]: 20,
                                [(0,
                                h.hs)("Rock")]: 40,
                                [(0,
                                h.hs)("Hornet")]: 60,
                                [(0,
                                h.hs)("Baby Ant")]: 30,
                                [(0,
                                h.hs)("Worker Ant")]: 40,
                                [(0,
                                h.hs)("Soldier Ant")]: 50,
                                [(0,
                                h.hs)("Spider")]: 40,
                                [(0,
                                h.hs)("Centipede")]: 20,
                                [(0,
                                h.hs)("Ant Hole")]: 3,
                                [(0,
                                h.hs)("Dandelion")]: 20,
                                [(0,
                                h.hs)("Bubble")]: 5
                            }),
                            [s.VC.DESERT]: I({
                                [(0,
                                h.hs)("Shiny Ladybug")]: 1,
                                [(0,
                                h.hs)("Sandstorm")]: 30,
                                [(0,
                                h.hs)("Scorpion")]: 60,
                                [(0,
                                h.hs)("Beetle")]: 60,
                                [(0,
                                h.hs)("Desert Centipede")]: 30,
                                [(0,
                                h.hs)("Fire Ant Hole")]: 3,
                                [(0,
                                h.hs)("Cactus")]: 40
                            }),
                            [s.VC.OCEAN]: I({
                                [(0,
                                h.hs)("Jellyfish")]: 5,
                                [(0,
                                h.hs)("Sponge")]: 5,
                                [(0,
                                h.hs)("Bubble")]: 4,
                                [(0,
                                h.hs)("Shell")]: 4,
                                [(0,
                                h.hs)("Starfish")]: 3,
                                [(0,
                                h.hs)("Leech")]: 3,
                                [(0,
                                h.hs)("Crab")]: 2.5
                            }),
                            [s.VC.SEWERS]: I({
                                [(0,
                                h.hs)("Fly")]: 5,
                                [(0,
                                h.hs)("Moth")]: 4,
                                [(0,
                                h.hs)("Firefly")]: 4,
                                [(0,
                                h.hs)("Maggot")]: 3,
                                [(0,
                                h.hs)("Roach")]: 3,
                                [(0,
                                h.hs)("Spider")]: 3,
                                [(0,
                                h.hs)("Rock")]: 2,
                                [(0,
                                h.hs)("Evil Ladybug")]: 2,
                                [(0,
                                h.hs)("Evil Centipede")]: 1
                            }),
                            [s.VC.ANT_HELL]: I({
                                [(0,
                                h.hs)("Baby Ant")]: 5,
                                [(0,
                                h.hs)("Worker Ant")]: 5,
                                [(0,
                                h.hs)("Soldier Ant")]: 5,
                                [(0,
                                h.hs)("Queen Ant")]: 1,
                                [(0,
                                h.hs)("Ant Egg")]: 2,
                                [(0,
                                h.hs)("Baby Fire Ant")]: 5,
                                [(0,
                                h.hs)("Worker Fire Ant")]: 5,
                                [(0,
                                h.hs)("Soldier Fire Ant")]: 5,
                                [(0,
                                h.hs)("Queen Fire Ant")]: 1,
                                [(0,
                                h.hs)("Fire Ant Egg")]: 2,
                                [(0,
                                h.hs)("Baby Termite")]: 5,
                                [(0,
                                h.hs)("Worker Termite")]: 5,
                                [(0,
                                h.hs)("Soldier Termite")]: 5,
                                [(0,
                                h.hs)("Termite Overmind")]: 1,
                                [(0,
                                h.hs)("Termite Egg")]: 2
                            }),
                            [s.VC.HELL]: I({
                                [(0,
                                h.hs)("Hell Beetle")]: 25,
                                [(0,
                                h.hs)("Hell Spider")]: 25,
                                [(0,
                                h.hs)("Hell Yellowjacket")]: 20,
                                [(0,
                                h.hs)("Hell Centipede")]: 5,
                                [(0,
                                h.hs)("Demon")]: 2,
                                [(0,
                                h.hs)("Angelic Ladybug")]: 1
                            }),
                            [s.VC.HALLOWEEN]: I({
                                [(0,
                                h.hs)("Hell Beetle")]: 5,
                                [(0,
                                h.hs)("Hell Spider")]: 5,
                                [(0,
                                h.hs)("Hell Yellowjacket")]: 5,
                                [(0,
                                h.hs)("Hell Centipede")]: 5,
                                [(0,
                                h.hs)("Spider")]: 5,
                                [(0,
                                h.hs)("Pumpkin")]: 5,
                                [(0,
                                h.hs)("Jack O' Lantern")]: 5,
                                [(0,
                                h.hs)("Spirit")]: 4,
                                [(0,
                                h.hs)("Wilt")]: 3,
                                [(0,
                                h.hs)("Demon")]: 2,
                                [(0,
                                h.hs)("Termite Mound")]: 1
                            }),
                            [s.VC.DARK_FOREST]: I({
                                [(0,
                                h.hs)("Evil Centipede")]: 2,
                                [(0,
                                h.hs)("Evil Ladybug")]: 12.5,
                                [(0,
                                h.hs)("Termite Mound")]: 2,
                                [(0,
                                h.hs)("Soldier Termite")]: 16,
                                [(0,
                                h.hs)("Worker Termite")]: 8,
                                [(0,
                                h.hs)("Baby Termite")]: 8,
                                [(0,
                                h.hs)("Termite Egg")]: 1,
                                [(0,
                                h.hs)("Termite Overmind")]: 1,
                                [(0,
                                h.hs)("Wasp")]: 32.5,
                                [(0,
                                h.hs)("Spider")]: 25,
                                [(0,
                                h.hs)("Fly")]: 12.5,
                                [(0,
                                h.hs)("Stickbug")]: 8,
                                [(0,
                                h.hs)("Shrub")]: 15
                            })
                        }[t];
                        if (e) {
                            if (e.some((t => t < 0)))
                                throw new Error("Invalid mob table for " + s.hg[t].name);
                            a.A.mobTable = e
                        }
                    }(t[4]),
                    t[1]) {
                    case "maze":
                        a.A.allowedSwitchTime = Date.now(),
                        a.A.isTDM = !0,
                        a.A.width = a.A.height = 24576,
                        a.A.gamemode = s.LX.MAZE,
                        a.A.mobsExpire = !0,
                        a.A.teamCount = 0,
                        a.A.announceRarity = 7,
                        await k(a.A.biome);
                        break;
                    case "ffa":
                        a.A.isTDM = !1,
                        a.A.gamemode = s.LX.FFA;
                        break;
                    case "tdm":
                        a.A.isTDM = !0,
                        a.A.gamemode = s.LX.TDM;
                        break;
                    case "waves":
                        a.A.isTDM = !0,
                        a.A.teamCount = 0,
                        a.A.isWaves = !0,
                        a.A.isRadial = !0,
                        a.A.gamemode = s.LX.WAVES;
                        break;
                    case "line":
                        a.A.isTDM = !0,
                        a.A.teamCount = 0,
                        a.A.isLineMap = !0,
                        a.A.gamemode = s.LX.LINE,
                        a.A.mobsExpire = !0;
                        break;
                    default:
                        throw new Error("Invalid gamemode")
                    }
                    a.A.secretKey = t[3],
                    console.log(["Lobby Created:", "  - Gamemode: " + t[1], "  - Biome: " + s.hg[t[4]].name, "  - Modded: " + (t[2] ? "Yes" : "No"), "  - Admin UUID: " + a.A.secretKey, "  - Spawn Table: " + (a.A.mobTable ? C(a.A.mobTable) : "None")].join("\n"))
                }
                postMessage(t) {}
            }
        }
        ,
        446: (t, e, i) => {
            i.d(e, {
                GJ: () => n,
                cK: () => a,
                ey: () => r,
                hf: () => c,
                hs: () => o,
                lm: () => s.lm,
                vx: () => d,
                zw: () => h
            });
            var s = i(110);
            const a = structuredClone(s.cK)
              , n = [new s.lm("Basic",56.25,10,10).setDescription("A simple petal. Not too strong, not too weak."), new s.lm("Light",16.875,5,12).setMulti([1, 2, 2, 3, 3, 5, 5, 5, 5, 5, 7, 7], 0, !0).setSize(.75).setDescription("It's very light and recharges quickly, at the cost of damage."), new s.lm("Faster",56.25,5,12).setSize(.75).setExtraRadians(.03).setDescription("This one makes your petals spin faster."), new s.lm("Heavy",225,150,13).setSize(1.25).setDensity(3).setDescription("A more chunky petal that hits harder but takes longer to recharge."), new s.lm("Stinger",225,1,100).setMulti([1, 1, 1, 1, 1, 3, 5, 5, 5, 5], 1, !0).setDescription("A fragile petal that deals lots of damage."), new s.lm("Rice",1.125,1,4).setSize(1.25).setDescription("A bit weak, but recharges instantly."), new s.lm("Rock",67.5,30,22).setSize(1.3).setDescription("It's a rock, not much to say about it."), new s.lm("Cactus",22.5,15,7).setSize(1.25).setExtraHealth(30).setHuddles(1).setDescription("A petal that gives you extra health. Pretty magical if you ask me."), new s.lm("Leaf",40.5,12,16).setSize(1.2).setConstantHeal(3.45).setDescription("A petal that heals you over time by the power of photosynthesis."), new s.lm("Wing",67.5,10,20).setSize(1.3).setWingMovement(!0).setDescription("It comes and it goes."), new s.lm("Bone",56.25,10,14).setSize(1.6).setArmor(3).setDescription("Sturdy."), new s.lm("Dirt",56.25,10,10).setSize(1.3).setExtraHealth(50).setSpeedMultiplier(.925).setExtraSize(2.5).setHuddles(1).setDescription("The extra soil gives your flower more mass, but it does slow you down a bit..."), new s.lm("Magnolia",33.75,8,8).setConstantHeal(3).setExtraHealth(20).setSize(1.5).setDescription("A purely magical petal that heals you over time while simultaneously making you tougher."), new s.lm("Corn",157.5,200,8).setSize(1.6).setDescription("It's a piece of corn. They say ants like to snack on it."), new s.lm("Sand",33.75,1.25,5).setSize(.85).setMulti(4, !0).setDescription("Some fine grains of sand. They recharge quickly and can pack a punch."), new s.lm("Orange",78.75,6.667,8).setMulti(3, !0).setDescription("A bunch of oranges. They're pretty juicy."), new s.lm("Missile",22.5 * 1.5,2,35).setLaunchable(.7, 45).setSize(1.35).setDescription("You can actually shoot this one!"), new s.lm("Pea.projectile",2250,5,15).setDescription("[object null object]"), new s.lm("Rose",22.5 * 3.5,5,5).setHealing(8.62).setHuddles(1).setDescription("Not great at combat, but it's healing properties are amazing."), new s.lm("Yin Yang",22.5 * 2,10,10).setYinYang(1).setDescription("The mysterious petal of balance."), new s.lm("Pollen",22.5 * 2,5,38).setSize(.6).setLaunchable(0, 75).setMulti([1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 5], !1, !0).setDescription("It makes you sneeze. Don't drop it!"), new s.lm("Honey",5 * 22.5,1,1).setSize(1.1).setEnemySpeedMultiplier(.45, 5).setDescription("It's sticky and will slow your enemies down."), new s.lm("Iris",22.5 * 4,5,5).setSize(.8).setPoison(70 / 3, 3).setDescription("Packs an unexpected punch in its secret weapon: poison."), new s.lm("Web",3 * 22.5,100,0).setDescription("Sticky!"), new s.lm("Web.projectile",2250,1e5,0).setSize(30).setEnemySpeedMultiplier(.334, .05).setIgnoreWalls(1).setDescription("[object null object]"), new s.lm("Third Eye",0,0,0).setExtraRange(.5).setMulti(0, !1).setWearable(s.DQ.THIRD_EYE).setDescription("Through the eye of the beholder comes extra range."), new s.lm("Pincer",22.5 * 2.5,5,5).setSize(1.2).setPoison(2, 5).setEnemySpeedMultiplier(.2, 0.75).setDescription("Poisonous, and it slows down your enemies. A perfect double whammy."), new s.lm("Beetle Egg",675,25,1).setSize(1.5).setHuddles(1).setDescription(Array.from({ length: 10 }, (_, i) => `Summon: Beetle, Health ${900 * Math.pow(3, i)}, Damage ${5 * Math.pow(3, i)}`)), new s.lm("Antennae",0,0,0).setExtraVision(150).setMulti(0, !1).setWearable(s.DQ.ANTENNAE).setDescription("These feelers give you some extra vision."), new s.lm("Peas",33.75,5,15).setSize(1.15).setDescription("A pod of peas. They'll explode if you're not careful."), new s.lm("Stick",450,25,1).setSize(1.25).setHuddles(1).setMulti(4, !1).setDescription(Array.from({ length: 10 }, (_, i) => `Summon: Sandstorm, Health ${30 * Math.pow(3, i)}, Damage ${30 * Math.pow(3, i)}`)), new s.lm("Scorpion Missile.projectile",2250,5,2.5).setPoison(2.5, 5).setDescription("[object null object]"), new s.lm("Dahlia",1.5 * 22.5,5 / 3,5 / 3).setHealing(12.93).setSize(.5).setHuddles(1).setMulti(3, !0).setDescription("A very consistent trickle heal."), new s.lm("Primrose",22.5,12.5,7.5).setSize(1.3).setHuddles(1).setHealSpit(67.5, 125, 10).setDescription("Said to be from a mystical covenant of witches who specialized in healing nature."), new s.lm("Fire Spellbook",28.125,15,5).setSize(1.2).setPentagramAbility(90, 150, 10, {
                damage: 5,
                duration: 5
            }, {
                multiplier: .5,
                duration: 5
            }).setHuddles(1).setDescription("A tome of ancient spells. It's said to be able to focus the power of a fallen Demon."), new s.lm("Deity",0,50,50).setSize(1.15).setMulti(3, !0).setHealSpit(10, 1e3, 5).setConstantHeal(1e3).setExtraHealth(1e4).setEnemySpeedMultiplier(.1, 10).setDamageReduction(.2).setExtraRadians(.01).setExtraRange(1.05).setExtraVision(5).setPoison(5, 10).setSpeedMultiplier(1.05).setWingMovement(1).setLightning([5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 512, 128).setDescription("A petal that channels the power of all that came before."), new s.lm("Lightning",22.5,1e-15,5).setLightning([3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9], 256, 7).setDescription("Shockingly shocking!"), new s.lm("Powder",5 * 22.5,25,0).setSize(1.65).setSpeedMultiplier(1.03).setHuddles(1).setDescription("This special cocaine will make you go fast!"), new s.lm("Ant Egg",1350,25,1).setSize(1.1).setMulti(4, !1).setHuddles(1).setDescription(Array.from({ length: 10 }, (_, i) => `Summon: Soldier Ant, Health ${250 * Math.pow(3, i)}, Damage ${6 * Math.pow(3, i)}`)), new s.lm("Yucca",22.5 * 2.5,10,5).setSize(1.2).setConstantHeal(7.5, !0).setDescription("A strange leaf that heals you but only when you're in defensive mode."), new s.lm("Magnet",1.5 * 22.5,30,1).setSize(1.55).setExtraPickupRange(125).setAttractsLightning(1).setHuddles(1).setDescription("This petal's magnetic field will attract nearby items. Does not stack."), new s.lm("Amulet",0,0,0).setMulti(0, !1).setWearable(s.DQ.AMULET).setDamageReflection(.175, .275).setDescription("What an oddity! It's said to reflect a portion of incoming conventional damage. Does not stack."), new s.lm("Jelly",225,10,10).setDensity(20).setDescription("Super bouncy! Knocks all your enemies around. Very fun to use and cause problems with."), new s.lm("Yggdrasil",1012.5, 1000000,0).setDeathDefying(.5, 0.1).setHuddles(1).setPhases(1).setDescription("The tree of life. If you were to die with this petal alive, you'd be revived with a portion of your health."), new s.lm("Glass",45,1e-15,0.1).setPhases(1).setDescription("A shard of glass that phases through enemies."), new s.lm("Dandelion",22.5,8,8).setMulti([1, 1, 1, 1, 1, 2, 3, 3, 3, 3], !1).setSize(1.4).setLaunchable(.575, 35).setEnemySpeedMultiplier(0, 0.1).setDescription("A paralyzing force."), new s.lm("Sponge",22.5 * 2.5,1000000,0).setSize(4 / 3).setHuddles(1).setAbsorbsDamage(35, [67.5, 67.5, 67.5, 90, 90, 90, 112.5, 112.5, 112.5, 135, 157.5, 180]).setDescription("It absorbs conventional damage done to your flower. If incoming damage is too great, you will suffer all of the damage the sponge has contained at once."), new s.lm("Pearl",22.5 * 4,50,20).setSize(2).setPlaceDown(1).setDescription("A pearl that can be placed on the ground. You can call it back to you at any time."), new s.lm("Shell",22.5*3.5,25,5).setSize(1.5).setShield(7).setHuddles(1).setDescription("A shell that provides extra protection through a shield."), new s.lm("Bubble",11.25,1e-15,1e-15).setSize(1.3).setBoost([5, 7, 11, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((t => 2 * t | 0)), [1, .9, .8, .7, .6, .5, .5, .4, .3, .2, .1, .1].map((t => 22.5 * t | 0))).setDescription("It will boost you when you pop it."), new s.lm("Air",0,0,0).setMulti(0, !1).setWearable(s.DQ.AIR).setExtraSize(3).setDescription("Literally nothing at all, but it puffs you up."), new s.lm("Starfish",1.5 * 22.5,7,5).setSize(1.4).setConstantHeal(7, !1, .7).setDescription("A leg of a starfish. It will heal you quite effectively while you are under 70% health."), new s.lm("Fang",3.5*22.5,0,15).setSize(1.15).setHealBack([.405,.405,.405,.405,.405,.405,.405,.405,.405,.405]).setDescription("The fang of a dangerous Leech. It will heal back the damage it causes."), new s.lm("Goo",39.375,10,10).setSize(1.3).setPoison(2, 5).setEnemySpeedMultiplier(.7, 5).setLaunchable(1, 35).setDescription("This sticky goo isn't good for you..."), new s.lm("Maggot Poo",22.5,5,5.5).setSize(1.3).setDamageReflection(.05).setLaunchable(0, 75).setDescription("A steaming pile of shi- I mean, poo."), new s.lm("Lightbulb",22.5,25,1).setSize(1.4).setAttractsAggro(1).setHuddles(1).setLighting(1).setDescription("Mobs will prioritize your shiny bulb when in use. The priority increases with each rarity, and stacks with itself."), new s.lm("Battery",50.625,1e-15,0).setPhases(1).setSize(1.34).setLightning(4, 256, 5, [3,3,3,3,3,3,3,3,3,3,3], !0).setDescription("A battery that can release electric charges when its parent is hit."), new s.lm("Dust",16.875,6,7.5).setMulti(3, !0).setLaunchable(.7, 55).setDensity(1.5).setDescription("A cloud of dust that can be launched at enemies."), new s.lm("Armor",0,0,0).setMulti(0, !1).setWearable(s.DQ.ARMOR).setExtraHealth(-10).setDamageReduction(.25).setDescription("This petal greatly protects you, but at a cost..."), new s.lm("Wasp Missile.projectile",2250,4,4).setPoison(2, 8).setDescription("[object null object]"), new s.lm("Shrub",33.75,15,6).setSize(1.2).setExtraHealth(15).setPoison(3, 2).setDescription("Extra HP with a bonus: poison!"), new s.lm("projectile.grape",2250,1,4).setPoison(.75, 6).setDescription("[object null object]"), new s.lm("Grapes",33.75,5,15).setSize(1.15).setPoison(7.5, 5).setDescription("With an added bonus: Poison!"), new s.lm("Lantern",45,5,5).setHuddles(1).setDescription("This fragile lantern shines so bright...").setLighting(3), new s.lm("web.player.launched",2250,1e5,0).setSize(30).setEnemySpeedMultiplier(.334, .05).setIgnoreWalls(1).setDescription("[object null object]"), new s.lm("Branch",67.5,10,10).setSize(1.5).setHuddles(1).setMulti(2, !1).setDescription("A fragile branch from the Wilt."), new s.lm("Leech Egg",45,25,1).setSize(1.5).setHuddles(1).setDescription("Summons leeches to help protect you!"), new s.lm("Hornet Egg",45,25,1).setSize(1.5).setMulti(2, !1).setHuddles(1).setDescription("Hey wait a minute... This isn't a Beetle Egg!"), new s.lm("Candy",22.5,5,5).setSize(.9).setMulti(5, !0).setDescription("Ooh, tasty!"), new s.lm("Claw",45,.25,8).setExtraDamage(.75, 1, 7.5).setDescription("Sharp against the strong, weak against the weak."), new s.lm("Bullet.projectile",1e3,12,2).setDescription("[object null object]"), new s.lm("Square Egg",45,50,1).setSize(1.2).setHuddles(1).setDescription("This isn't from this world..."), new s.lm("Triangle Egg",67.5,100,2).setSize(1.5).setHuddles(1).setDescription("This isn't from this world..."), new s.lm("Pentagon Egg",90,200,4).setSize(1.8).setHuddles(1).setDescription("This isn't from this world..."), new s.lm("Moon", 2025, 150000, 0.1).setSize([2, 5, 8, 11, 14, 16, 19, 22, 22]).setDescription("Where did you even get this?").setDrawing(new s.H1().addAction("beginPath").addAction("moveTo",-0.11749999737367034,-0.9818999780528248).addAction("bezierCurveTo",-0.14774999669753042,-0.978049978138879,-0.19949999554082742,-0.9683999783545734,-0.23249999480322003,-0.9603999785333872).addAction("bezierCurveTo",-0.26549999406561264,-0.9524499787110836,-0.31499999295920134,-0.9375999790430067,-0.34249999234452844,-0.9273999792709944).addAction("bezierCurveTo",-0.36999999172985554,-0.9171999794989822,-0.41724999067373547,-0.8962499799672512,-0.44749998999759555,-0.8807999803125857).addAction("bezierCurveTo",-0.4777499893214556,-0.8653999806568027,-0.5215999883413316,-0.8401499812211839,-0.5449999878183007,-0.8247499815654009).addAction("bezierCurveTo",-0.5683999872952701,-0.8093499819096177,-0.6021499865408988,-0.7847999824583529,-0.6199999861419201,-0.7701499827858058).addAction("bezierCurveTo",-0.6378499857429414,-0.7555499831121413,-0.667949985070154,-0.7286999837122856,-0.6867999846488237,-0.7105499841179697).addAction("bezierCurveTo",-0.7056999842263758,-0.6923499845247714,-0.7381499835010619,-0.6572499853093174,-0.7589499830361457,-0.6324999858625231).addAction("bezierCurveTo",-0.7797499825712295,-0.6077499864157287,-0.8093999819085003,-0.5683999872952696,-0.8247999815642835,-0.5449999878183003).addAction("bezierCurveTo",-0.8401499812211843,-0.5215999883413311,-0.8653999806568029,-0.4777499893214552,-0.8807999803125859,-0.4474999899975951).addAction("bezierCurveTo",-0.8962499799672514,-0.41724999067373547,-0.9168499795068055,-0.37114999170415075,-0.9265499792899936,-0.34499999228864864).addAction("bezierCurveTo",-0.9362499790731817,-0.31884999287314697,-0.9501499787624927,-0.27384999387897535,-0.9574499785993249,-0.24499999452382282).addAction("bezierCurveTo",-0.9647499784361571,-0.21614999516867073,-0.9739499782305212,-0.1711499961744991,-0.9778999781422317,-0.144999996758997).addAction("bezierCurveTo",-0.9817999780550597,-0.11884999734349533,-0.9864499779511242,-0.06824999847449309,-0.9881499779131264,-0.03249999927356795).addAction("bezierCurveTo",-0.9902999778650701,0.013349999701604442,-0.98884997789748,0.05309999881312244,-0.9830999780260026,0.10249999770894647).addAction("bezierCurveTo",-0.9786499781254681,0.14099999684840459,-0.9680999783612787,0.20059999551624053,-0.9596999785490334,0.23499999474734068).addAction("bezierCurveTo",-0.9512499787379056,0.2693499939795583,-0.9363999790698287,0.31884999287314697,-0.9266499792877585,0.3449999922886491).addAction("bezierCurveTo",-0.9168499795068055,0.3711499917041512,-0.8962499799672514,0.4172499906737359,-0.8807999803125857,0.44749998999759555).addAction("bezierCurveTo",-0.8653999806568027,0.4777499893214552,-0.8401499812211839,0.5216499883402141,-0.8247499815654009,0.5449999878183007).addAction("bezierCurveTo",-0.8093499819096177,0.5683499872963873,-0.7847999824583529,0.602099986542016,-0.7701499827858058,0.6199999861419201).addAction("bezierCurveTo",-0.7555499831121413,0.6378999857418242,-0.7286999837122856,0.667949985070154,-0.7105499841179697,0.686799984648824).addAction("bezierCurveTo",-0.6923499845247714,0.7056999842263756,-0.6572499853093174,0.7381499835010619,-0.6324999858625231,0.7589499830361452).addAction("bezierCurveTo",-0.6077499864157287,0.7797499825712291,-0.5683999872952696,0.8093999819085003,-0.5449999878183003,0.8247999815642828).addAction("bezierCurveTo",-0.5215999883413311,0.8401499812211841,-0.4777499893214552,0.8653999806568025,-0.4474999899975951,0.8807999803125859).addAction("bezierCurveTo",-0.41724999067373547,0.8962499799672514,-0.3699999917298551,0.917199979498982,-0.342499992344528,0.9273999792709948).addAction("bezierCurveTo",-0.3149999929592009,0.9375999790430067,-0.2654999940656122,0.9524499787110834,-0.2324999948032196,0.9603499785345049).addAction("bezierCurveTo",-0.19949999554082698,0.9682999783568089,-0.1443999967724081,0.9781999781355268,-0.10999999754130796,0.982399978041649).addAction("bezierCurveTo",-0.07564999830909036,0.9865999779477717,-0.026149999415501668,0.9899999778717756,0,0.9899999778717756).addAction("bezierCurveTo",0.026149999415502112,0.9899999778717756,0.07559999831020825,0.9865999779477717,0.1099999975413084,0.982399978041649).addAction("bezierCurveTo",0.144349996773526,0.978199978135526,0.19949999554082742,0.9682999783568085,0.23249999480322003,0.9603499785345049).addAction("bezierCurveTo",0.26549999406561264,0.9524499787110834,0.31499999295920134,0.9375999790430072,0.34249999234452844,0.9273999792709948).addAction("bezierCurveTo",0.36999999172985554,0.9171999794989829,0.4172499906737359,0.8962499799672514,0.44749998999759555,0.8807999803125859).addAction("bezierCurveTo",0.4777499893214552,0.8653999806568025,0.5216499883402141,0.8401499812211841,0.5449999878183007,0.8247999815642828).addAction("bezierCurveTo",0.5683499872963873,0.8093999819084998,0.6077499864157287,0.7797499825712291,0.6324999858625233,0.7589499830361452).addAction("bezierCurveTo",0.6572499853093179,0.7381499835010619,0.6923499845247716,0.7056999842263756,0.7105499841179701,0.686799984648824).addAction("bezierCurveTo",0.7286999837122856,0.667949985070154,0.7555499831121417,0.6378999857418242,0.770149982785806,0.6199999861419201).addAction("bezierCurveTo",0.7847999824583525,0.602099986542016,0.8093499819096177,0.5683499872963873,0.8247499815654007,0.5449999878183007).addAction("bezierCurveTo",0.8401499812211841,0.5216499883402141,0.8653999806568025,0.4777499893214552,0.8807999803125859,0.44749998999759555).addAction("bezierCurveTo",0.8962499799672514,0.4172499906737359,0.9168499795068055,0.3711499917041512,0.9265499792899932,0.3449999922886491).addAction("bezierCurveTo",0.9362499790731817,0.31884999287314697,0.9501499787624925,0.27384999387897535,0.9574499785993242,0.24499999452382326).addAction("bezierCurveTo",0.9647499784361568,0.21614999516867117,0.9739499782305203,0.17114999617449955,0.9778999781422315,0.14499999675899744).addAction("bezierCurveTo",0.9817999780550593,0.11884999734349533,0.986449977951124,0.06824999847449353,0.988149977913126,0.03249999927356839).addAction("bezierCurveTo",0.9902999778650692,-0.013349999701604442,0.9888499778974795,-0.05309999881312244,0.9830999780260021,-0.10249999770894647).addAction("bezierCurveTo",0.9786499781254676,-0.14099999684840414,0.9680999783612783,-0.20064999551512308,0.959699978549033,-0.23499999474734068).addAction("bezierCurveTo",0.9512499787379052,-0.26939999397844083,0.936399979069829,-0.31884999287314697,0.9266499792877583,-0.3449999922886491).addAction("bezierCurveTo",0.916849979506805,-0.3711499917041512,0.896249979967251,-0.41724999067373547,0.8807999803125859,-0.44749998999759555).addAction("bezierCurveTo",0.8653999806568025,-0.4777499893214556,0.8401499812211841,-0.5215999883413316,0.8247999815642828,-0.5449999878183007).addAction("bezierCurveTo",0.8093999819084998,-0.5683999872952701,0.7797499825712291,-0.607749986415729,0.7589499830361452,-0.6324999858625233).addAction("bezierCurveTo",0.7381499835010619,-0.6572499853093177,0.7056999842263756,-0.6923499845247718,0.686799984648824,-0.7105499841179699).addAction("bezierCurveTo",0.667949985070154,-0.7286999837122858,0.6378999857418242,-0.7555499831121415,0.6199999861419201,-0.7701499827858063).addAction("bezierCurveTo",0.602099986542016,-0.7847999824583531,0.5683499872963873,-0.8093499819096177,0.5449999878183007,-0.8247499815654011).addAction("bezierCurveTo",0.5216499883402141,-0.8401499812211843,0.4777499893214552,-0.8653999806568029,0.44749998999759555,-0.8807999803125859).addAction("bezierCurveTo",0.4172499906737359,-0.8962499799672514,0.36999999172985554,-0.9171999794989825,0.34249999234452844,-0.9273999792709948).addAction("bezierCurveTo",0.31499999295920134,-0.9375999790430072,0.26549999406561264,-0.9524499787110836,0.23249999480322003,-0.9603499785345047).addAction("bezierCurveTo",0.19949999554082742,-0.9682999783568083,0.144349996773526,-0.9781999781355262,0.1099999975413084,-0.982399978041649).addAction("bezierCurveTo",0.07559999831020825,-0.9865999779477714,0.022749999491497697,-0.9897499778773637,-0.007499999832361937,-0.9894499778840693).addAction("bezierCurveTo",-0.037749999156222014,-0.9891499778907749,-0.08724999804981026,-0.9857499779667707,-0.11749999737367034,-0.981899978052825).addAction("lineTo",-0.11749999737367034,-0.9818999780528248).addAction("fill","#6d6d6d").addAction("closePath").addAction("beginPath").addAction("moveTo",-0.0874999980442226,-0.9246499793324621).addAction("bezierCurveTo",-0.11224999749101672,-0.9224499793816359,-0.15499999653548002,-0.9160499795246868,-0.18249999592080712,-0.9104999796487392).addAction("bezierCurveTo",-0.20999999530613422,-0.904899979773909,-0.25159999437630187,-0.8940499800164252,-0.274999993853271,-0.8863999801874163).addAction("bezierCurveTo",-0.31134999304078503,-0.8744999804534019,-0.31724999290890965,-0.8710499805305154,-0.3156499929446728,-0.8624999807216229).addAction("bezierCurveTo",-0.31464999296702434,-0.8569999808445574,-0.31369999298825846,-0.8355999813228849,-0.3134999929927287,-0.8149999817833307).addAction("bezierCurveTo",-0.3132499929983168,-0.7849499824550006,-0.3155999929457902,-0.7726499827299269,-0.3253499927278609,-0.7529499831702562).addAction("bezierCurveTo",-0.3320499925781042,-0.7394999834708871,-0.34594999226741496,-0.7208999838866295,-0.356249992037192,-0.7116999840922655).addAction("bezierCurveTo",-0.366549991806969,-0.7024999842979016,-0.38454999140463775,-0.6900499845761807,-0.3962499911431223,-0.6840499847102912).addAction("bezierCurveTo",-0.41239999078214185,-0.6757499848958106,-0.4265499904658645,-0.6730499849561606,-0.4549999898299575,-0.6728499849606309).addAction("bezierCurveTo",-0.48269998921081436,-0.6726999849639836,-0.4983999888598918,-0.6753499849047515,-0.514999988488853,-0.6829999847337604).addAction("bezierCurveTo",-0.5273999882116915,-0.6886499846074732,-0.5464999877847734,-0.7016499843169006,-0.557499987538904,-0.7118499840889125).addAction("bezierCurveTo",-0.5684999872930347,-0.7220499838609249,-0.5791999870538711,-0.7302999836765229,-0.5812499870080501,-0.7301999836787583).addAction("bezierCurveTo",-0.5832999869622291,-0.7300999836809936,-0.5723999872058632,-0.7181999839469793,-0.5569999875500797,-0.7037499842699617).addAction("bezierCurveTo",-0.5377999879792332,-0.685749984672293,-0.5237499882932752,-0.6664999851025641,-0.5123999885469672,-0.6424999856390059).addAction("bezierCurveTo",-0.5032499887514859,-0.6232499860692768,-0.49424998895265126,-0.5950999866984783,-0.49239998899400206,-0.5799999870359898).addAction("bezierCurveTo",-0.4903499890398231,-0.5635499874036758,-0.4914499890152362,-0.5404499879200011,-0.49519998893141715,-0.5224999883212149).addAction("bezierCurveTo",-0.49864998885430367,-0.5059999886900184,-0.5059499886911358,-0.4823999892175199,-0.5114999885670839,-0.46999998949468136).addAction("bezierCurveTo",-0.517049988443032,-0.4575999897718428,-0.5352999880351121,-0.4338999903015792,-0.552049987660721,-0.41724999067373547).addAction("bezierCurveTo",-0.5687999872863292,-0.40059999104589217,-0.5931999867409468,-0.3820499914605171,-0.6062499864492563,-0.3759999915957448).addAction("bezierCurveTo",-0.6192999861575661,-0.369949991730973,-0.6417999856546519,-0.36244999189861105,-0.6562499853316692,-0.3593499919679015).addAction("bezierCurveTo",-0.6710999849997459,-0.35619999203830943,-0.6955499844532458,-0.3551499920617789,-0.7124999840743838,-0.3569999920204281).addAction("bezierCurveTo",-0.7289999837055801,-0.3587999919801952,-0.7548999831266698,-0.3659499918203801,-0.7699999827891586,-0.37294999166391785).addAction("bezierCurveTo",-0.7850999824516471,-0.37994999150745556,-0.8047999820113179,-0.3911499912571159,-0.8137499818112699,-0.3977999911084771).addAction("bezierCurveTo",-0.8226999816112219,-0.40449999095872036,-0.8310499814245846,-0.4094499908480791,-0.8323499813955275,-0.40874999086372554).addAction("bezierCurveTo",-0.8336499813664702,-0.408049990879372,-0.8439999811351298,-0.38614999136887507,-0.8553499808814375,-0.35999999195337296).addAction("bezierCurveTo",-0.8666999806277453,-0.33384999253787084,-0.8833999802544714,-0.2865999935939909,-0.8924999800510705,-0.25499999430030584).addAction("bezierCurveTo",-0.9015499798487872,-0.22339999500662078,-0.9124499796051533,-0.1749999960884452,-0.9166999795101582,-0.14749999670311809).addAction("bezierCurveTo",-0.9209499794151634,-0.11999999731779099,-0.9258499793056396,-0.07274999837391105,-0.9276499792654065,-0.042499999050050974).addAction("bezierCurveTo",-0.9293999792262913,-0.012249999726190897,-0.9283499792497603,0.04064999909140177,-0.9252999793179331,0.07499999832361937).addAction("bezierCurveTo",-0.9222499793861059,0.10939999755471952,-0.9153999795392151,0.15884999644942566,-0.9100999796576794,0.18499999586492777).addAction("bezierCurveTo",-0.9047499797772613,0.21114999528042988,-0.8920499800611283,0.25834999422542726,-0.8817499802913513,0.2899999935179949).addAction("bezierCurveTo",-0.8714999805204564,0.3216499928105625,-0.8466999810747797,0.3800999915041028,-0.8265999815240499,0.41999999061226845).addAction("bezierCurveTo",-0.8064999819733201,0.4598999897204341,-0.7748499826807524,0.5136999885179101,-0.7562999830953774,0.5395999879389999).addAction("bezierCurveTo",-0.7376999835111195,0.5655499873589727,-0.701149984328076,0.6088999863900244,-0.6749999849125741,0.635999985784292).addAction("lineTo",-0.6274999859742818,0.6852999846823509).addAction("bezierCurveTo",-0.5809999870136378,0.6320499858725817,-0.555099987592548,0.6084499864000823,-0.539999987930059,0.5985499866213644).addAction("bezierCurveTo",-0.5248999882675704,0.5885999868437644,-0.497849988872185,0.5739499871712175,-0.4799999892711635,0.5659999873489139).addAction("bezierCurveTo",-0.4621499896701424,0.5579999875277277,-0.43739999022334786,0.5489999877288936,-0.4249999905005093,0.5459499877970662).addAction("bezierCurveTo",-0.4125999907776712,0.5429499878641213,-0.38449999140575475,0.5390999879501757,-0.36249999189749316,0.5373999879881737).addAction("bezierCurveTo",-0.34049999238923156,0.5356999880261712,-0.31174999303184414,0.5361499880161134,-0.2985499933268869,0.5383999879658221).addAction("lineTo",-0.274649993861094,0.5424999878741801).addAction("bezierCurveTo",-0.2530999943427741,0.5075999886542557,-0.23684999470598989,0.48944998905993975,-0.2246499949786811,0.4795999892801044).addAction("bezierCurveTo",-0.21249999525025443,0.469749989500269,-0.19009999575093373,0.4563499897997825,-0.17499999608844474,0.44974998994730386).addAction("bezierCurveTo",-0.15424999655224347,0.4407499901484697,-0.13894999689422516,0.4378999902121721,-0.1124999974854286,0.43814999020658396).addAction("bezierCurveTo",-0.0885499980207527,0.4383999902009954,-0.06804999847896376,0.4421499901171764,-0.04749999893829182,0.4500999899394804).addAction("bezierCurveTo",-0.02644999940879611,0.45819998975843124,-0.009149999795481367,0.4699999894946809,0.010399999767542134,0.4895999890565865).addAction("bezierCurveTo",0.030199999324977966,0.5093999886140224,0.0416499990690502,0.5261999882385129,0.049749998888001024,0.5474999877624209).addAction("bezierCurveTo",0.056449998738244744,0.5652499873656773,0.06139999862760348,0.5898999868147072,0.06179999861866259,0.607899986412376).addAction("lineTo",0.06249999860301614,0.6383499857317654).addAction("bezierCurveTo",0.1128999974764886,0.6108999863453208,0.14209999682381724,0.5982999866269529,0.1599999964237213,0.5925999867543577).addAction("bezierCurveTo",0.17789999602362538,0.5868999868817628,0.20824999534524968,0.5733999871835112,0.22749999491497874,0.5625999874249099).addAction("bezierCurveTo",0.2467499944847078,0.5517999876663091,0.2770999938063321,0.5378499879781153,0.29499999340623617,0.5316499881166963).addAction("bezierCurveTo",0.31289999300614024,0.5254499882552768,0.34434999230317764,0.5185499884095037,0.36499999184161425,0.5163999884575605).addAction("bezierCurveTo",0.3855999913811683,0.5141999885067339,0.419349990626797,0.513949988512322,0.4399999901652336,0.5157999884709716).addAction("bezierCurveTo",0.46059998970478766,0.5176499884296208,0.49099998902529496,0.5229999883100391,0.507499988656491,0.5276499882061034).addAction("bezierCurveTo",0.5239999882876871,0.5323499881010503,0.5541999876126646,0.5443499878328293,0.5746499871555715,0.5543499876093119).addAction("bezierCurveTo",0.5950499866995962,0.5643499873857944,0.6276999859698114,0.5857999869063497,0.6471499855350702,0.602099986542016).addAction("lineTo",0.6824999847449362,0.6316499858815221).addAction("bezierCurveTo",0.7173999839648606,0.590799986794591,0.7414999834261833,0.5594499874953174,0.7585999830439687,0.5356999880261712).addAction("bezierCurveTo",0.7757499826606362,0.5119499885570251,0.8041999820247292,0.46439998961985074,0.8218499816302209,0.4299999903887506).addAction("bezierCurveTo",0.8394999812357127,0.395649991156533,0.8618499807361513,0.3461499922629443,0.8715499805193399,0.3199999928474422).addAction("bezierCurveTo",0.881249980302528,0.29384999343194007,0.8906499800924217,0.26459999408572843,0.8924499800521879,0.2549999943003054).addAction("lineTo",0.8957499799784272,0.23749999469146088).addAction("bezierCurveTo",0.8544999809004366,0.22449999498203344,0.832499981392175,0.21324999523349053,0.8202999816648657,0.20409999543800916).addAction("bezierCurveTo",0.8080499819386744,0.19494999564252735,0.7904499823320652,0.17739999603480072,0.7811499825399366,0.16499999631196216).addAction("bezierCurveTo",0.771799982748925,0.1525999965891236,0.7606999829970293,0.1300999970920378,0.7564499830920242,0.11499999742954925).addAction("bezierCurveTo",0.7512499832082535,0.0965999978408214,0.749499983247369,0.07509999832138359,0.7510499832127233,0.049999998882412466).addAction("bezierCurveTo",0.7526499831769606,0.023999999463557575,0.7568999830819654,0.005599999874829731,0.7649999829009162,-0.009999999776483026).addAction("bezierCurveTo",0.771399982757865,-0.022399999499321588,0.7869999824091778,-0.04334999903105263,0.7995999821275461,-0.056599998734891965).addAction("bezierCurveTo",0.812199981845914,-0.0698499984387313,0.833749981364234,-0.08614999807439805,0.8474999810568975,-0.09289999792352388).addAction("bezierCurveTo",0.861249980749561,-0.09959999777376671,0.8834499802533529,-0.10679999761283421,0.8967999799549569,-0.10879999756813108).addAction("lineTo",0.9211499794106919,-0.11249999748542949).addAction("bezierCurveTo",0.915749979531391,-0.15899999644607377,0.9078499797079704,-0.19724999559111955,0.9000999798811962,-0.2274999949149792).addAction("bezierCurveTo",0.8922999800555398,-0.25774999423883926,0.8777499803807571,-0.30384999320842354,0.8676499806065099,-0.32999999262392565).addAction("bezierCurveTo",0.8575999808311452,-0.35614999203942777,0.8359499813150602,-0.40339999098330814,0.8194999816827462,-0.43499999027699277).addAction("bezierCurveTo",0.8030999820493152,-0.46659998957067783,0.7745499826874571,-0.5138499885145578,0.7560999830998472,-0.5399999879300599).addAction("bezierCurveTo",0.7369999835267649,-0.5670499873254455,0.6934999844990664,-0.6165999862179166,0.6550499853584903,-0.6550499853584921).addAction("bezierCurveTo",0.6173499862011513,-0.6926999845169488,0.5664999873377368,-0.7374999835155911,0.5399999879300581,-0.7562999830953783).addAction("bezierCurveTo",0.5138499885145564,-0.7748499826807533,0.4598999897204328,-0.806499981973321,0.4199999906122671,-0.8265999815240508).addAction("bezierCurveTo",0.3800999915041019,-0.8466999810747806,0.32164999281056117,-0.8714999805204577,0.28999999351799355,-0.881749980291352).addAction("bezierCurveTo",0.25834999422542637,-0.8920499800611292,0.21114999528042855,-0.9047499797772622,0.18499999586492644,-0.910049979658798).addAction("bezierCurveTo",0.15884999644942477,-0.9153499795403337,0.11164999750442695,-0.9219999793916944,0.07999999821185932,-0.9247999793291097).addAction("bezierCurveTo",0.04834999891929215,-0.9275999792665248,0.007899999823420156,-0.9295999792218212,-0.009999999776483914,-0.9292499792296443).addAction("bezierCurveTo",-0.027849999377504986,-0.9288999792374675,-0.06274999859742936,-0.9268499792832885,-0.08749999804422393,-0.9246499793324623).addAction("lineTo",-0.0874999980442226,-0.9246499793324621).addAction("fill","#878787").addAction("closePath").addAction("beginPath").addAction("moveTo",-0.37224999167956385,-0.8499999810010195).addAction("bezierCurveTo",-0.3737499916460365,-0.8472499810624867,-0.37894999152980713,-0.8449999811127782,-0.3837499914225191,-0.8449999811127782).addAction("bezierCurveTo",-0.3885499913152306,-0.8449999811127782,-0.41499999072402716,-0.8323999813944103,-0.44249999010935426,-0.8169499817397445).addAction("bezierCurveTo",-0.46999998949468136,-0.801499982085079,-0.49304998897947394,-0.7868499824125319,-0.4937499889638275,-0.7844499824661761).addAction("bezierCurveTo",-0.49444998894818104,-0.7819999825209378,-0.4983999888598918,-0.7799999825656414,-0.5024999887682498,-0.7799999825656414).addAction("bezierCurveTo",-0.5066499886754898,-0.7799999825656414,-0.5099999886006117,-0.7777499826159329,-0.5099999886006117,-0.7749999826774001).addAction("bezierCurveTo",-0.5099999886006117,-0.7722499827388674,-0.5127999885380268,-0.7699499827902765,-0.5162499884609133,-0.7698999827913942).addAction("bezierCurveTo",-0.5196999883837998,-0.7698499827925118,-0.5275999882072209,-0.7658999828808011,-0.5337999880686404,-0.7611499829869719).addAction("bezierCurveTo",-0.543799987845123,-0.7534999831579627,-0.5442999878339472,-0.7512999832071363,-0.53834998796694,-0.7424999834038317).addAction("bezierCurveTo",-0.5346499880496411,-0.7369999835267662,-0.5222499883268026,-0.7274499837402255,-0.5107999885827303,-0.7212499838788062).addAction("bezierCurveTo",-0.49934998883865767,-0.715049984017387,-0.4804499892611056,-0.708599984161556,-0.46874998952262104,-0.7068999841995538).addAction("bezierCurveTo",-0.4559999898076055,-0.7050999842397867,-0.43894999018870307,-0.7065999842062591,-0.42609999047592284,-0.7106499841157348).addAction("bezierCurveTo",-0.4143499907385557,-0.7144499840307981,-0.4047499909531327,-0.7191999839246273,-0.40484999095089735,-0.7212499838788062).addAction("bezierCurveTo",-0.404949990948662,-0.7232999838329852,-0.40219999101012993,-0.7249499837961049,-0.39874999108724296,-0.7248999837972225).addAction("bezierCurveTo",-0.39529999116435643,-0.7248499837983402,-0.3857499913778155,-0.7321499836351724,-0.3774999915622175,-0.7411499834340067).addAction("bezierCurveTo",-0.36924999174661943,-0.7501499832328411,-0.3596999919600785,-0.7625499829556792,-0.356249992037192,-0.7687499828170985).addAction("bezierCurveTo",-0.35279999211430546,-0.7749499826785178,-0.34859999220818283,-0.7884499823767692,-0.34689999224618084,-0.7987499821465462).addAction("bezierCurveTo",-0.3451499922852963,-0.8090499819163233,-0.3451499922852963,-0.8259499815385789,-0.34689999224618084,-0.8362499813083559).addAction("bezierCurveTo",-0.34924999219365427,-0.8504499809909611,-0.3523499921243638,-0.8549999808892608,-0.3597499919589606,-0.8549999808892608).addAction("bezierCurveTo",-0.3650999918393789,-0.8549999808892608,-0.37074999171309164,-0.8527499809395522,-0.37224999167956385,-0.8499999810010195).addAction("lineTo",-0.37224999167956385,-0.8499999810010195).addAction("moveTo",-0.627499985974282,-0.6841999847069384).addAction("bezierCurveTo",-0.6329999858513475,-0.6786999848298729,-0.6461499855574222,-0.6659499851148578,-0.6567499853204937,-0.6558499853406101).addAction("bezierCurveTo",-0.6673499850835654,-0.6457499855663629,-0.6893499845918267,-0.6217499861028046,-0.705699984226376,-0.6024999865330756).addAction("bezierCurveTo",-0.7220499838609249,-0.5832499869633465,-0.7369999835267664,-0.565249987365678,-0.7389999834820631,-0.5624999874271452).addAction("bezierCurveTo",-0.7409499834384772,-0.5597499874886123,-0.7495999832451348,-0.5484999877400694,-0.7581999830529096,-0.5374999879859388).addAction("bezierCurveTo",-0.7667999828606848,-0.5264999882318082,-0.7787499825935813,-0.508499988634139,-0.7846999824605885,-0.49749998888000846).addAction("bezierCurveTo",-0.7906499823275956,-0.4864999891258779,-0.7981999821588399,-0.4729999894276262,-0.8014999820850792,-0.4674999895505607).addAction("bezierCurveTo",-0.8047999820113187,-0.4619999896734952,-0.8097499819006773,-0.4558999898098408,-0.81249998183921,-0.4539999898523095).addAction("bezierCurveTo",-0.8154499817732723,-0.45189998989924796,-0.8113499818649146,-0.44419999007135624,-0.8024999820627274,-0.43514999027363954).addAction("bezierCurveTo",-0.7942499822471294,-0.4267499904613943,-0.7762499826494607,-0.4149999907240276,-0.7624999829567971,-0.4089999908581379).addAction("bezierCurveTo",-0.7487499832641336,-0.4030499909911307,-0.7329999836161736,-0.39699999112635886,-0.7274999837391081,-0.3955999911576509).addAction("bezierCurveTo",-0.7219999838620426,-0.39419999118894333,-0.7062499842140826,-0.39299999121576557,-0.692499984521419,-0.392949991216883).addAction("bezierCurveTo",-0.6787499848287555,-0.3928999912180009,-0.6607499852310867,-0.3943999911844731,-0.6524999854154887,-0.39629999114200487).addAction("bezierCurveTo",-0.6442499855998907,-0.3981499911006541,-0.6289999859407547,-0.40369999097660214,-0.618599986173213,-0.4085999908670783).addAction("bezierCurveTo",-0.6081999864056711,-0.41349999075755495,-0.5997499865945435,-0.4191999906301498,-0.5998499865923081,-0.42124999058432877).addAction("bezierCurveTo",-0.5999499865900728,-0.42329999053850775,-0.5966499866638337,-0.42499999050050974,-0.5924999867565932,-0.42499999050050974).addAction("bezierCurveTo",-0.5883999868482355,-0.42499999050050974,-0.5782499870751054,-0.4328499903250487,-0.5699999872595074,-0.44249999010935426).addAction("bezierCurveTo",-0.5617499874439094,-0.45214998989365984,-0.5504999876953667,-0.46899998951703337,-0.5449999878183012,-0.47999998927116394).addAction("bezierCurveTo",-0.5394999879412357,-0.4909999890252945,-0.5333499880786987,-0.5072999886609613,-0.5312999881245197,-0.5162499884609133).addAction("bezierCurveTo",-0.5292499881703407,-0.5251999882608653,-0.5277499882038685,-0.5471499877702444,-0.5279999881982804,-0.5649999873712659).addAction("bezierCurveTo",-0.5283499881904574,-0.5888499868381767,-0.5318999881111086,-0.6047999864816664,-0.541399987898767,-0.6249999860301614).addAction("bezierCurveTo",-0.5485499877389524,-0.6400999856926499,-0.5646499873790891,-0.6620499852020294,-0.5771999870985749,-0.673749984940514).addAction("bezierCurveTo",-0.5897499868180605,-0.6854499846789985,-0.6039499865006659,-0.6947999844700097,-0.6087499863933774,-0.6945999844744801).addAction("bezierCurveTo",-0.6135499862860889,-0.694349984480068,-0.6219999860972167,-0.6896999845840037,-0.6274999859742822,-0.6841999847069384).addAction("lineTo",-0.37224999167956385,-0.8499999810010195).addAction("moveTo",0.8878999801538883,-0.0712499984074384).addAction("bezierCurveTo",0.8858499801997093,-0.06919999845325941,0.8826499802712351,-0.06744999849237487,0.880849980311468,-0.06744999849237487).addAction("bezierCurveTo",0.8789999803528188,-0.06739999849349276,0.8697499805595723,-0.06429999856278323,0.860249980771914,-0.060599998645484376).addAction("bezierCurveTo",0.8507499809842556,-0.05684999872930341,0.8433999811485409,-0.051799998842180006,0.8439999811351298,-0.04939999889582403).addAction("bezierCurveTo",0.8445499811228365,-0.04699999894946805,0.8411999811977147,-0.04499999899417162,0.8365999813005325,-0.04499999899417162).addAction("bezierCurveTo",0.8319499814044682,-0.04499999899417162,0.8231999816000459,-0.03769999915733946,0.8170499817375094,-0.028749999357387424).addAction("bezierCurveTo",0.8109499818738546,-0.019799999557435388,0.8012999820895494,-0.0023999999463559796,0.7955999822169542,0.009999999776482582).addAction("bezierCurveTo",0.7884999823756518,0.025399999432266007,0.785199982449412,0.04279999904334497,0.7851499824505299,0.06499999854713678).addAction("bezierCurveTo",0.7850999824516474,0.08889999801293014,0.7882499823812394,0.10409999767318379,0.7969499821867791,0.12249999726191163).addAction("bezierCurveTo",0.8034499820414926,0.13624999695457518,0.8163499817531554,0.15459999654442047,0.8256499815452845,0.16324999635107806).addAction("bezierCurveTo",0.8348999813385309,0.17189999615773566,0.8514999809674917,0.18374999589286745,0.8624999807216227,0.18949999576434484).addAction("bezierCurveTo",0.8734999804757537,0.19529999563470435,0.8875499801617117,0.2000499955285342,0.8937499800231308,0.19999999552965164).addAction("bezierCurveTo",0.9020999798364935,0.19999999552965164,0.906249979743734,0.19584999562241112,0.9097999796643856,0.18374999589286745).addAction("bezierCurveTo",0.9124499796051531,0.17479999609291585,0.9167999795079234,0.15289999658241893,0.9195499794464563,0.13499999698251486).addAction("bezierCurveTo",0.9222499793861063,0.11709999738261079,0.9258499793056401,0.07999999821186066,0.9274499792698778,0.052499998826533556).addAction("bezierCurveTo",0.9290999792329977,0.024999999441206455,0.929649979220704,-0.014949999665841318,0.9286999792419381,-0.03624999918974936).addAction("lineTo",0.926899979282171,-0.07499999832361937).addAction("bezierCurveTo",0.8995999798923733,-0.07499999832361937,0.8899999801069503,-0.07329999836161738,0.8878999801538892,-0.0712499984074384).addAction("lineTo",-0.37224999167956385,-0.8499999810010195).addAction("moveTo",-0.1724999961443241,0.4869499891158191).addAction("bezierCurveTo",-0.18624999583698765,0.49369998896494494,-0.20604999539442304,0.5089999886229633,-0.21649999516084728,0.5208999883569776).addAction("bezierCurveTo",-0.22694999492727153,0.5327499880921094,-0.23929999465122753,0.5522499876562503,-0.24399999454617438,0.5641499873902647).addAction("bezierCurveTo",-0.251599994376301,0.5834999869577584,-0.2537999943271272,0.5853999869152902,-0.264999994076788,0.5823499869834627).addAction("bezierCurveTo",-0.2718499939236785,0.5804999870248135,-0.28989999352022977,0.5772999870963389,-0.3049999931827183,0.5751999871432778).addAction("bezierCurveTo",-0.32009999284520685,0.5731499871890993,-0.34709999224170973,0.5722499872092155,-0.3649999918416138,0.5731999871879814).addAction("bezierCurveTo",-0.3828499914426349,0.5741999871656298,-0.40309999099001237,0.5764499871153381,-0.4099999908357854,0.5782499870751052).addAction("bezierCurveTo",-0.4168499906826759,0.5800999870337544,-0.42584999048151007,0.5822499869856981,-0.4299999903887506,0.5830499869678172).addAction("bezierCurveTo",-0.4340999902971081,0.583899986948818,-0.4419999901205296,0.5865499868895863,-0.4474999899975951,0.5889999868348244).addAction("bezierCurveTo",-0.4529999898746606,0.5914499867800629,-0.46989998949691625,0.5994999866001312,-0.4849999891594048,0.6068999864347284).addAction("bezierCurveTo",-0.5000999888218933,0.6142999862693257,-0.5191499883960926,0.6253499860223393,-0.5272499882150434,0.6314499858859932).addAction("bezierCurveTo",-0.5353999880328768,0.637499985750765,-0.5516999876685436,0.6520499854255473,-0.5634999874047928,0.6637499851640318).addAction("bezierCurveTo",-0.5753499871399248,0.6754499849025168,-0.5881999868527048,0.6911999845504768,-0.5920999867655332,0.6987499843817209).addAction("bezierCurveTo",-0.5991999866068358,0.7124499840755023,-0.5990999866090709,0.7125999840721491,-0.5618499874416734,0.7399999834597115).addAction("bezierCurveTo",-0.5412999879010014,0.7550999831222001,-0.5217999883368605,0.768399982824922,-0.5184999884106212,0.769499982800335).addAction("bezierCurveTo",-0.5151999884843819,0.7705999827757481,-0.5113499885704362,0.7728499827254565,-0.5099999886006112,0.7744999826885763).addAction("bezierCurveTo",-0.5086499886307863,0.7761499826516962,-0.5029999887570735,0.780399982556701,-0.497499988880008,0.78389998247847).addAction("bezierCurveTo",-0.4919999890029425,0.7873999824002391,-0.4835499891918147,0.7913499823119494,-0.4787499892991032,0.7926499822828923).addAction("bezierCurveTo",-0.47394998940639166,0.7939499822538352,-0.4699999894946809,0.797249982180074,-0.4699999894946809,0.799999982118607).addAction("bezierCurveTo",-0.4699999894946809,0.8027499820571395,-0.45144998990930585,0.8137499818112706,-0.42874999041669026,0.8244499815721071).addAction("bezierCurveTo",-0.4060499909240747,0.8351499813329433,-0.3762499915901567,0.8489499810244894,-0.36249999189749316,0.8550999808870259).addAction("bezierCurveTo",-0.3487499922048296,0.8612999807484454,-0.33524999250657794,0.8667999806255109,-0.3324999925680454,0.8673999806120998).addAction("bezierCurveTo",-0.32974999262951243,0.8679999805986887,-0.3207499928306783,0.8710999805293986,-0.31249999301508025,0.8743499804567549).addAction("bezierCurveTo",-0.3042499931994822,0.8775999803841117,-0.29184999347664364,0.8823999802768236,-0.28499999362975315,0.884999980218709).addAction("bezierCurveTo",-0.2780999937839801,0.8875999801605943,-0.2668499940354372,0.8907999800890689,-0.2599999941885467,0.8920999800600113).addAction("bezierCurveTo",-0.25309999434277364,0.8933999800309542,-0.24244999458081962,0.8957499799784276,-0.23624999471940056,0.8972499799448999).addAction("bezierCurveTo",-0.23004999485798105,0.8987499799113721,-0.22049999507144058,0.901149979857728,-0.21499999519437507,0.902499979827553).addAction("bezierCurveTo",-0.20949999531730956,0.903849979797378,-0.19994999553076864,0.906249979743734,-0.19374999566934958,0.9077499797102062).addAction("bezierCurveTo",-0.18754999580793008,0.9092999796755605,-0.16449999632313794,0.9135499795805657,-0.14249999681487635,0.9172499794978646).addAction("bezierCurveTo",-0.12049999730661476,0.9208999794162809,-0.07549999831244314,0.9254499793145801,-0.04249999905005053,0.9273499792721118).addAction("bezierCurveTo",-0.009249999793246033,0.9292499792296436,0.04424999901093596,0.9284499792475249,0.07749999826774046,0.9255499793123447).addAction("bezierCurveTo",0.11049999753013307,0.9226499793771645,0.15324999657459593,0.9167999795079225,0.17249999614432499,0.9125499796029173).addAction("bezierCurveTo",0.19174999571405404,0.9082999796979121,0.2119999952614311,0.9037499797996129,0.2174999951384966,0.9024999798275526).addAction("bezierCurveTo",0.2229999950155621,0.9011999798566097,0.23424999476410502,0.8987499799113716,0.24249999457970306,0.8969999799504871).addAction("bezierCurveTo",0.2507499943953011,0.8952499799896025,0.2597499941941357,0.89249998005107,0.2624999941326682,0.8908499800879501).addAction("bezierCurveTo",0.26524999407120076,0.8892499801237124,0.27084999394603093,0.8875499801617108,0.27499999385327145,0.8870999801717692).addAction("bezierCurveTo",0.27914999376051197,0.8866999801807096,0.30384999320842354,0.8784499803651116,0.32999999262392565,0.8688499805796885).addAction("bezierCurveTo",0.35614999203942777,0.8592499807942655,0.3898999912850565,0.8451499811094245,0.404999990947545,0.8375499812792979).addAction("bezierCurveTo",0.42009999061003356,0.8299499814491713,0.4386999901942916,0.8194999816827471,0.44624999002553567,0.8143499817978586).addAction("bezierCurveTo",0.45379998985678016,0.80919998191297,0.460549989705906,0.805399981997907,0.46124998969025954,0.8059499819856133).addAction("bezierCurveTo",0.46194998967461354,0.8064499819744375,0.47319998942315644,0.8008499820996073,0.486249989131466,0.7934499822650101).addAction("bezierCurveTo",0.499299988839776,0.7860499824304128,0.5099999886006121,0.7777499826159326,0.5099999886006121,0.7749999826773997).addAction("bezierCurveTo",0.5099999886006121,0.7722499827388671,0.5127999885380272,0.7699499827902758,0.5162499884609137,0.7698499827925112).addAction("bezierCurveTo",0.5196999883838007,0.7697999827936286,0.5432999878562992,0.7540499831456686,0.5687499872874473,0.7348499835748221).addAction("bezierCurveTo",0.5941999867185959,0.7156999840028577,0.617249986203388,0.6954999844543632,0.6199999861419205,0.6899999845772977).addAction("bezierCurveTo",0.6227499860804531,0.6844999847002322,0.6294999859295789,0.6788499848265195,0.6349999858066444,0.6774999848566945).addAction("bezierCurveTo",0.6404999856837099,0.6761499848868695,0.6463999855518345,0.66994998502545,0.6480999855138365,0.6637499851640309).addAction("bezierCurveTo",0.650549985459075,0.6547999853640789,0.6466999855451294,0.6485999855026598,0.6293499859329317,0.6333999858424058).addAction("bezierCurveTo",0.6173499862011531,0.622899986077099,0.6046999864839027,0.6121999863162628,0.6012499865610157,0.6096499863732596).addAction("bezierCurveTo",0.5977999866381292,0.6070999864302569,0.5803999870270498,0.5970999866537743,0.5624999874271457,0.5874999868683513).addAction("bezierCurveTo",0.5445999878272416,0.5778999870829282,0.530099988151342,0.5716999872215087,0.5301999881491071,0.5737499871756877).addAction("bezierCurveTo",0.5303499881457538,0.5757999871298662,0.5275499882083392,0.5748499871511008,0.5239499882888055,0.571599987223744).addAction("bezierCurveTo",0.5203999883681538,0.5683499872963873,0.5118999885581439,0.5644999873824417,0.5049999887123708,0.562999987415969).addAction("bezierCurveTo",0.49814998886548034,0.5615499874483789,0.4845999891683461,0.5583499875199047,0.4749999893829231,0.5558999875746666).addAction("bezierCurveTo",0.46539998959750006,0.5534999876283107,0.4361499902512884,0.5511499876808372,0.4099999908357863,0.5507499876897781).addAction("bezierCurveTo",0.3838499914202842,0.550299987699836,0.3534999920986599,0.5522999876551324,0.3424999923445289,0.5551499875914305).addAction("bezierCurveTo",0.33149999259039786,0.5579499875288452,0.3191499928664423,0.5610499874595547,0.3149999929592018,0.561999987438321).addAction("bezierCurveTo",0.31084999305196126,0.5629499874170869,0.29624999337829694,0.5685999872907996,0.2824999936856334,0.5746499871555715).addAction("bezierCurveTo",0.26874999399296984,0.5806499870214612,0.24624999449588403,0.5926499867532402,0.23249999480322048,0.6012999865598978).addAction("bezierCurveTo",0.21874999511055693,0.609949986366555,0.2007499955128882,0.6185499861743304,0.19249999569729015,0.6203999861329796).addAction("bezierCurveTo",0.1842499958816921,0.6222499860916288,0.17429999610409208,0.6245999860391023,0.17034999619238178,0.6256499860156328).addAction("bezierCurveTo",0.16639999628067104,0.6266499859932813,0.14279999680817212,0.6374999857507646,0.11784999736584822,0.649749985476956).addAction("bezierCurveTo",0.08304999814368852,0.6667999850958588,0.06509999854490278,0.679649984808639,0.04069999909028521,0.7047499842476102).addAction("bezierCurveTo",0.023249999480323247,0.7227499838452789,0.00014999999664810915,0.7520999831892552,-0.010599999763070578,0.7699999827891588).addAction("bezierCurveTo",-0.021349999522789265,0.7878999823890629,-0.030799999311565518,0.8058499819878486,-0.03164999929256629,0.8099999818950891).addAction("bezierCurveTo",-0.03244999927468495,0.8141499818023297,-0.03464999922551115,0.8225499816145749,-0.036549999183042914,0.828749981475994).addAction("bezierCurveTo",-0.03844999914057423,0.834949981337413,-0.042249999055637755,0.8388499812502412,-0.04499999899417029,0.8374999812804163).addAction("bezierCurveTo",-0.047749998932703264,0.8361499813105913,-0.04999999888241158,0.8265499815251673,-0.05004999888129413,0.8162499817553908).addAction("bezierCurveTo",-0.05004999888129413,0.8059499819856142,-0.05299999881535644,0.7918499823007732,-0.056649998733772744,0.7849999824538827).addAction("bezierCurveTo",-0.06024999865330649,0.7780999826081096,-0.06474999855272356,0.7668499828595667,-0.06659999851137277,0.7599999830126762).addAction("bezierCurveTo",-0.06954999844543508,0.7489999832585452,-0.06744999849237399,0.7462999833188952,-0.04919999890029292,0.7374999835155904).addAction("bezierCurveTo",-0.03779999915510324,0.7319999836385249,-0.018699999582020954,0.7167999839782717,-0.0067499998491244995,0.7037499842699617).addAction("bezierCurveTo",0.005199999883772399,0.6906999845616517,0.014999999664725205,0.6754999849013985,0.014999999664725205,0.669999985024333).addAction("bezierCurveTo",0.014999999664725205,0.6644999851472675,0.017249999614433964,0.6588499852735548,0.019999999552966496,0.6574999853037298).addAction("bezierCurveTo",0.022749999491498585,0.6561499853339048,0.024999999441207787,0.6369999857619404,0.024999999441207787,0.6149999862536788).addAction("bezierCurveTo",0.024999999441207787,0.5840499869454647,0.022549999495969253,0.5701999872550365,0.014299999680371211,0.553749987622723).addAction("bezierCurveTo",0.008399999812247039,0.5420499878842384,-0.004549999898298296,0.5244999882765113,-0.014449999677016212,0.514699988495559).addAction("bezierCurveTo",-0.02439999945461624,0.5048999887146057,-0.04149999907240165,0.4923999889940025,-0.052499998826532224,0.48694998911582).addAction("bezierCurveTo",-0.06614999852143111,0.4801499892678116,-0.08444999811239429,0.47659998934715997,-0.10999999754130707,0.47579998936504175).addAction("bezierCurveTo",-0.14124999684281514,0.4747999893873933,-0.15164999661035727,0.47669998934492464,-0.1724999961443232,0.48694998911582).addAction("lineTo",-0.37224999167956385,-0.8499999810010195).addAction("fill","#999999").addAction("closePath").addAction("beginPath").addAction("moveTo",-0.34249999234452844,-0.8668999806232751).addAction("bezierCurveTo",-0.353499992098659,-0.8627999807149171,-0.36364999187178926,-0.8580999808199703,-0.36499999184161425,-0.8564499808568509).addAction("bezierCurveTo",-0.36634999181143924,-0.8547499808948489,-0.36354999187402415,-0.8548999808914961,-0.35874999198131263,-0.856699980851263).addAction("bezierCurveTo",-0.3523499921243638,-0.859099980797619,-0.34934999219141893,-0.8569999808445574,-0.3475499922316523,-0.8487499810289594).addAction("bezierCurveTo",-0.3462499922607094,-0.8425499811675401,-0.34504999228753164,-0.8273999815061692,-0.3449499922897665,-0.8149999817833307).addAction("bezierCurveTo",-0.34484999229200186,-0.8025999820604923,-0.3479499922227114,-0.7846499824617061,-0.35179999213665747,-0.7749999826774003).addAction("bezierCurveTo",-0.3556999920494852,-0.7653499828930947,-0.36869999175891266,-0.7486499832663689,-0.38069999149069167,-0.7378499835077676).addAction("bezierCurveTo",-0.3926999912224707,-0.7270499837491662,-0.4097999908402561,-0.7151999840140346,-0.4187499906402081,-0.7115999840945009).addAction("bezierCurveTo",-0.42769999044016016,-0.7079499841760846,-0.44509999005123957,-0.7049999842420223,-0.45749998977407813,-0.7049999842420223).addAction("bezierCurveTo",-0.4698999894969167,-0.7049999842420223,-0.48954998905770486,-0.7091499841492626,-0.5012499887961894,-0.7141999840363862).addAction("bezierCurveTo",-0.512949988534674,-0.7192499839235098,-0.5281499881949276,-0.7301999836787583,-0.5349999880418181,-0.7384999834932389).addAction("lineTo",-0.5474999877624214,-0.7535499831568451).addAction("lineTo",-0.5774999870918691,-0.730549983670935).addAction("bezierCurveTo",-0.5464999877847734,-0.701699984315783,-0.5273999882116915,-0.6886499846074732,-0.514999988488853,-0.6829999847337604).addAction("bezierCurveTo",-0.4983999888598918,-0.6753499849047515,-0.48269998921081436,-0.6726999849639834,-0.4549999898299575,-0.6728499849606309).addAction("bezierCurveTo",-0.4265499904658645,-0.6730499849561606,-0.41239999078214185,-0.6757499848958106,-0.3962499911431223,-0.6840499847102912).addAction("bezierCurveTo",-0.38454999140463775,-0.6900499845761807,-0.366549991806969,-0.7024999842979016,-0.356249992037192,-0.7116999840922655).addAction("bezierCurveTo",-0.34594999226741496,-0.7208999838866295,-0.33209999257698675,-0.7394999834708871,-0.3255499927233907,-0.7529499831702562).addAction("bezierCurveTo",-0.31684999291785054,-0.7707999827712775,-0.3134999929927287,-0.7863499824237081,-0.31329999299719935,-0.8099999818950894).addAction("bezierCurveTo",-0.3130999930016696,-0.8278499814961109,-0.31389999298378823,-0.8497999810054899,-0.3150499929580839,-0.858749980805442).addAction("bezierCurveTo",-0.31619999293237955,-0.867699980605394,-0.3183499928843232,-0.8748499804455792,-0.3197999928519133,-0.8746499804500494).addAction("bezierCurveTo",-0.3212999928183855,-0.8744499804545196,-0.33149999259039786,-0.8709499805327507,-0.3424999923445289,-0.8668999806232753).addAction("lineTo",-0.34249999234452844,-0.8668999806232751).addAction("moveTo",-0.6028499865252528,-0.7096999841369691).addAction("bezierCurveTo",-0.6108999863453213,-0.7012499843258413,-0.6140999862737957,-0.6956499844510111,-0.6099999863654377,-0.6971999844163659).addAction("bezierCurveTo",-0.6055999864637855,-0.6988499843794855,-0.5934999867342414,-0.6922999845258893,-0.5806499870214614,-0.6812499847728761).addAction("bezierCurveTo",-0.5686499872896824,-0.6709499850030991,-0.5536999876238409,-0.6534999853931369,-0.5474499877635393,-0.6424999856390061).addAction("bezierCurveTo",-0.5411999879032376,-0.6314999858848753,-0.5332999880798166,-0.6100999863632026,-0.5298999881558122,-0.5949999867007139).addAction("bezierCurveTo",-0.5264499882329261,-0.5798999870382253,-0.5249499882664534,-0.5562499875668441,-0.5265999882295729,-0.5424999878741805).addAction("bezierCurveTo",-0.5281999881938102,-0.528749988181517,-0.5307999881356955,-0.5118999885581434,-0.5323499881010503,-0.5049999887123708).addAction("bezierCurveTo",-0.533899988066405,-0.4981499888654799,-0.5404999879188837,-0.483499989192933,-0.5469999877735976,-0.47249998943880245).addAction("bezierCurveTo",-0.5534999876283111,-0.46149998968467143,-0.5674999873153868,-0.44449999006465113,-0.5781499870773408,-0.4346999902836983).addAction("bezierCurveTo",-0.5887999868392946,-0.4248999905027451,-0.6087499863933774,-0.4118999907933176,-0.622499986086041,-0.4057999909296637).addAction("bezierCurveTo",-0.6362499857787045,-0.39974999106489184,-0.6609999852254989,-0.3933999912068251,-0.6774999848566952,-0.3917499912437057).addAction("bezierCurveTo",-0.698799984380603,-0.3895999912917616,-0.7161999839916828,-0.39124999125488147,-0.7374999835155907,-0.39739999111741797).addAction("bezierCurveTo",-0.753999983146787,-0.40219999101012993,-0.7770499826315795,-0.4125999907776716,-0.7887499823700639,-0.4205499905999752).addAction("bezierCurveTo",-0.8004499821085485,-0.4284999904222788,-0.811149981869385,-0.43839999020099674,-0.81249998183921,-0.4424999901093547).addAction("bezierCurveTo",-0.814199981801212,-0.44759998999536066,-0.8180999817140404,-0.4439999900758269,-0.8247499815654011,-0.4312499903608118).addAction("lineTo",-0.8344499813485893,-0.41249999077990696).addAction("bezierCurveTo",-0.817449981728569,-0.3989499910827732,-0.7967499821912498,-0.38709999134764095,-0.777499982621521,-0.37744999156333536).addAction("bezierCurveTo",-0.7547499831300231,-0.36604999181814524,-0.7319999836385251,-0.35884999197907774,-0.7124999840743842,-0.3568499920237813).addAction("bezierCurveTo",-0.6959999844431879,-0.35514999206177933,-0.670699985008687,-0.35624999203719243,-0.6562499853316697,-0.35934999196790196).addAction("bezierCurveTo",-0.6417999856546526,-0.3624499918986115,-0.6192999861575668,-0.3699499917309734,-0.6062499864492568,-0.37599999159574526).addAction("bezierCurveTo",-0.593199986740947,-0.3820499914605171,-0.5687999872863294,-0.4005999910458926,-0.5520499876607214,-0.4172499906737359).addAction("bezierCurveTo",-0.535299988035113,-0.4338999903015792,-0.5170499884430324,-0.45759998977184324,-0.5114999885670843,-0.4699999894946818).addAction("bezierCurveTo",-0.5059499886911367,-0.4823999892175199,-0.4986499888543041,-0.5059999886900188,-0.49519998893141803,-0.5224999883212154).addAction("bezierCurveTo",-0.49144998901523707,-0.5404499879200011,-0.4903499890398235,-0.563549987403676,-0.4923999889940025,-0.57999998703599).addAction("bezierCurveTo",-0.49424998895265215,-0.5950999866984787,-0.5032499887514863,-0.6232499860692771,-0.512299988549203,-0.6424999856390061).addAction("bezierCurveTo",-0.523299988303334,-0.665749985119328,-0.5373999879881741,-0.6854499846789988,-0.5543999876081949,-0.7012499843258413).addAction("bezierCurveTo",-0.5684999872930354,-0.7142999840341513,-0.5818499869946396,-0.7249999837949874,-0.5840999869443482,-0.7249999837949874).addAction("bezierCurveTo",-0.5863499868940567,-0.7249999837949874,-0.5947499867063022,-0.7180999839492146,-0.602849986525253,-0.7096999841369691).addAction("lineTo",-0.34249999234452844,-0.8668999806232751).addAction("moveTo",0.9207999794185153,-0.11749999737367078).addAction("bezierCurveTo",0.9204499794263383,-0.11474999743513781,0.9094499796722078,-0.11084999752230962,0.8963499799650156,-0.10879999756813064).addAction("bezierCurveTo",0.883199980258941,-0.10679999761283421,0.8612499807495619,-0.09959999777376671,0.8474999810568984,-0.09289999792352344).addAction("bezierCurveTo",0.8337499813642348,-0.0861499980743976,0.8121999818459149,-0.06984999843873085,0.7995999821275466,-0.05659999873489152).addAction("bezierCurveTo",0.7869999824091787,-0.04334999903105219,0.7713999827578655,-0.022399999499321144,0.7649999829009171,-0.009999999776483026).addAction("bezierCurveTo",0.7568999830819663,0.005599999874829731,0.7526499831769606,0.02399999946355802,0.7510499832127238,0.04999999888241291).addAction("bezierCurveTo",0.7494999832473694,0.07509999832138403,0.7512499832082535,0.09659999784082185,0.7564499830920246,0.1149999974295497).addAction("bezierCurveTo",0.7606999829970298,0.13009999709203823,0.7717999827489259,0.15259999658912404,0.7811499825399371,0.1649999963119626).addAction("bezierCurveTo",0.7904499823320656,0.17739999603480117,0.8080499819386753,0.1949499956425278,0.8202999816648666,0.2040999954380096).addAction("bezierCurveTo",0.8324999813921754,0.21324999523349142,0.8542999809049072,0.22449999498203432,0.8687499805819248,0.22909999487921606).addAction("bezierCurveTo",0.8831499802600598,0.2336999947763978,0.8955499799828983,0.24084999461658319,0.8962999799661344,0.24499999452382326).addAction("bezierCurveTo",0.8970499799493705,0.24914999443106378,0.8998999798856682,0.2417499945964665,0.9025999798253181,0.2286499948892744).addAction("bezierCurveTo",0.907349979719148,0.20559999540448182,0.9070999797247352,0.20474999542348105,0.8949999799951915,0.20214999548159573).addAction("bezierCurveTo",0.8880999801494185,0.20069999551400608,0.8745999804511668,0.1957499956246469,0.8649999806657438,0.19114999572746472).addAction("bezierCurveTo",0.8553999808803208,0.18654999583028298,0.8395999812334778,0.1760999960638583,0.8299999814480548,0.1678999962471428).addAction("bezierCurveTo",0.8203999816626317,0.15969999643042732,0.8078499819431464,0.14609999673441054,0.8021499820705507,0.13774999692104783).addAction("bezierCurveTo",0.7964999821968379,0.12934999710880257,0.790049982341007,0.11574999741278624,0.7878499823901803,0.1074999975971882).addAction("bezierCurveTo",0.7856499824393541,0.09924999778159016,0.7840999824739994,0.07844999824650678,0.7843999824672938,0.06124999863095626).addAction("bezierCurveTo",0.7847999824583534,0.04014999910257799,0.788649982372299,0.022299999501556922,0.7962999822013082,0.006249999860302058).addAction("bezierCurveTo",0.8024999820627272,-0.006799999848007499,0.8142999817989769,-0.024899999443441345,0.8225499816145749,-0.03389999924227505).addAction("bezierCurveTo",0.8307499814312904,-0.04294999903999219,0.8492999810166659,-0.05589999875053664,0.863749980693683,-0.06264999859966247).addAction("bezierCurveTo",0.8781999803707001,-0.06944999844767086,0.8961999799683689,-0.07504999832250103,0.9037499797996134,-0.07509999832138359).addAction("bezierCurveTo",0.9112999796308578,-0.07509999832138359,0.9197499794419857,-0.07679999828338557,0.9225499793794008,-0.07884999823756456).addAction("bezierCurveTo",0.9253999793156984,-0.08089999819174354,0.9262499792966992,-0.09109999796375545,0.9244999793358146,-0.10249999770894602).addAction("bezierCurveTo",0.9227999793738122,-0.1134999974630766,0.9211499794106932,-0.12024999731220243,0.9207999794185162,-0.1174999973736699).addAction("lineTo",-0.34249999234452844,-0.8668999806232751).addAction("moveTo",-0.1424999968148768,0.43829999020323207).addAction("bezierCurveTo",-0.1479999966919423,0.4397999901697043,-0.16374999633990228,0.4456499900389468,-0.17749999603256583,0.4513499899115416).addAction("bezierCurveTo",-0.19124999572522938,0.4570499897841369,-0.21249999525025487,0.46974998950026947,-0.2246499949786811,0.47959998928010483).addAction("bezierCurveTo",-0.23684999470598989,0.48944998905994064,-0.2530999943427741,0.5075999886542562,-0.2607499941717837,0.5199999883770947).addAction("lineTo",-0.274649993861094,0.5424999878741805).addAction("bezierCurveTo",-0.3117499930318446,0.5361499880161142,-0.340499992389232,0.5356999880261726,-0.3624999918974936,0.5373999879881746).addAction("bezierCurveTo",-0.3844999914057552,0.539099987950177,-0.4125999907776712,0.5428999878652401,-0.42499999050050974,0.5458999877981849).addAction("bezierCurveTo",-0.4373999902233483,0.5488999877311298,-0.4632499896455555,0.5584999875165528,-0.4824999892152846,0.567199987322093).addAction("bezierCurveTo",-0.5017499887850136,0.5758999871276327,-0.528699988182634,0.5907499867957098,-0.5423999878764154,0.6002499865833677).addAction("bezierCurveTo",-0.5560999875701964,0.6097499863710261,-0.5774999870918691,0.6283999859541662,-0.5898999868147077,0.6417499856557702).addAction("bezierCurveTo",-0.6023499865364286,0.6550499853584921,-0.6158999862335623,0.6712499849963938,-0.6199999861419201,0.6776499848533426).addAction("bezierCurveTo",-0.6269999859854578,0.688499984610826,-0.626649985993281,0.6899999845772986,-0.6149999862536788,0.6993999843671923).addAction("lineTo",-0.6024999865330756,0.7094999841414396).addAction("bezierCurveTo",-0.5873499868717047,0.6885999846085915,-0.5726999871991576,0.6721999849751596,-0.5601999874785544,0.6595499852579092).addAction("bezierCurveTo",-0.5476999877579511,0.6469499855395413,-0.5273999882116915,0.629949985919521,-0.514999988488853,0.6217499861028051).addAction("bezierCurveTo",-0.5025999887660144,0.6135999862849721,-0.47899998929351595,0.6010999865643689,-0.4624999896623194,0.5939999867230661).addAction("bezierCurveTo",-0.4459999900311229,0.5869499868806463,-0.4167499906849117,0.5782999870739887,-0.39749999111518264,0.5748499871511021).addAction("bezierCurveTo",-0.37719999156892303,0.5711999872326858,-0.34779999222606417,0.5698499872628608,-0.32749999267980456,0.5715499872248628).addAction("bezierCurveTo",-0.3082499931100755,0.5731999871879827,-0.28689999358728535,0.575799987129868,-0.2799999937415123,0.5772999870963402).addAction("bezierCurveTo",-0.2731499938946218,0.5787999870628124,-0.2635499941091983,0.5811499870102859,-0.2587499942164868,0.5824999869801109).addAction("bezierCurveTo",-0.2537499943282455,0.583949986947701,-0.2500499944109471,0.5823499869834641,-0.2500999944098292,0.5787499870639299).addAction("bezierCurveTo",-0.2501999944075939,0.5752999871410434,-0.2445499945338816,0.5617999874427921,-0.237599994689226,0.5487499877344821).addAction("bezierCurveTo",-0.23069999484345294,0.5356999880261726,-0.2176999951340255,0.5183999884128574,-0.2087499953340739,0.5102999885939066).addAction("bezierCurveTo",-0.19979999553412187,0.5022499887738379,-0.18239999592304246,0.4904499890375882,-0.1699999962002039,0.4840499891806398).addAction("bezierCurveTo",-0.15244999659247682,0.47504998938180565,-0.13974999687634382,0.4725999894365671,-0.11249999748542905,0.472849989430979).addAction("bezierCurveTo",-0.08924999800510713,0.4730999894253909,-0.06994999843649552,0.47654998934827786,-0.0549999987706542,0.48309998920187347).addAction("bezierCurveTo",-0.04259999904781564,0.48854998908005687,-0.02279999949038025,0.502999988757074,-0.010949999755248463,0.5152499884832649).addAction("bezierCurveTo",0.0017999999597670957,0.5283999881893395,0.014749999670311986,0.5487499877344817,0.020799999535083824,0.5649999873712659).addAction("bezierCurveTo",0.02879999935626998,0.5865999868884684,0.030299999322741744,0.5988999866135418,0.0277999993786211,0.6224999860860407).addAction("bezierCurveTo",0.026099999416619113,0.6389999857172368,0.020599999539553604,0.6614999852143226,0.015599999651312313,0.6724999849684536).addAction("bezierCurveTo",0.010649999761953577,0.6834999847225847,0.0008999999798824376,0.6992499843705446,-0.005999999865890171,0.7074999841861427).addAction("bezierCurveTo",-0.012949999710545335,0.7157499840017407,-0.02914999934844742,0.7281499837245793,-0.04194999906234509,0.7349999835714698).addAction("bezierCurveTo",-0.05479999877512487,0.7418999834172428,-0.06529999854043167,0.7497499832417818,-0.06529999854043167,0.7524999831803143).addAction("bezierCurveTo",-0.06524999854154956,0.7552499831188468,-0.061599998623133256,0.7664999828673897,-0.05719999872148085,0.7774999826215208).addAction("bezierCurveTo",-0.05274999882094633,0.7884999823756518,-0.04874999891035303,0.8059499819856142,-0.04829999892041137,0.8162499817553908).addAction("bezierCurveTo",-0.04784999893047015,0.8265499815251673,-0.046349998963997496,0.8350499813351782,-0.044999998994172064,0.8350999813340603).addAction("bezierCurveTo",-0.043649999024347075,0.8350999813340603,-0.0380499991495169,0.823299981597811,-0.03264999927021606,0.8087999819219114).addAction("bezierCurveTo",-0.027199999392033103,0.7943499822448938,-0.01314999970607511,0.7695499827992172,-0.0013999999687079878,0.7537499831523746).addAction("bezierCurveTo",0.010349999768659135,0.7379499835055321,0.033499999251216384,0.7114999840967355,0.049999998882412466,0.6949999844655395).addAction("bezierCurveTo",0.07104999841190818,0.6739499849360433,0.09304999792016977,0.6585499852802608,0.12374999723397151,0.6433499856200067).addAction("bezierCurveTo",0.14779999669641164,0.6313999858871102,0.17759999603033005,0.619899986144155,0.18999999575316862,0.6176999861933288).addAction("bezierCurveTo",0.20239999547600718,0.6155499862413856,0.2180999951250846,0.6098999863676728,0.22499999497085765,0.6051999864727255).addAction("bezierCurveTo",0.23184999481774815,0.6004499865788961,0.24874999444000379,0.5908999867923557,0.26249999413266734,0.583899986948818).addAction("bezierCurveTo",0.2762499938253309,0.5769499871041623,0.29649999337270794,0.5677499873097984,0.30749999312683896,0.5634999874047932).addAction("bezierCurveTo",0.31849999288097,0.5591999875009055,0.3466499922517685,0.5529999876394864,0.3699999917298551,0.5496999877132471).addAction("bezierCurveTo",0.3933499912079417,0.5463999877870083,0.4214999905787402,0.5450499878171833,0.43249999033287123,0.5467499877791848).addAction("bezierCurveTo",0.44349999008700225,0.5484499877411868,0.4592499897349622,0.5510999876819547,0.46749998955056027,0.552649987647309).addAction("bezierCurveTo",0.4757499893661583,0.5541999876126638,0.4914999890141183,0.5577499875333154,0.5024999887682493,0.5605499874707305).addAction("bezierCurveTo",0.5134999885223803,0.5633499874081456,0.5391499879490582,0.573949987171217,0.5594999874941999,0.5840499869454647).addAction("bezierCurveTo",0.5803499870281659,0.5944499867130069,0.6098499863687898,0.6149999862536788,0.6269999859854574,0.6310499858949328).addAction("lineTo",0.6574999853037293,0.6595999852567909).addAction("bezierCurveTo",0.6800499847996972,0.6376499857474118,0.6800499847996972,0.6372999857552344,0.6708999850042154,0.6249999860301614).addAction("bezierCurveTo",0.6657999851182095,0.6181499861832709,0.6471499855350693,0.6016499865520748,0.6295499859284601,0.5883499868493525).addAction("bezierCurveTo",0.6118999863229688,0.5750999871455131,0.5839999869465822,0.5579499875288452,0.5674999873153861,0.550299987699836).addAction("bezierCurveTo",0.55099998768419,0.5425999878719447,0.5239999882876867,0.5324499880988145,0.5074999886564906,0.5277499882038681).addAction("bezierCurveTo",0.4909999890252945,0.5229999883100387,0.4605999897047872,0.5176499884296208,0.43999999016523317,0.5157999884709716).addAction("bezierCurveTo",0.41934999062679656,0.513949988512322,0.38559999138116785,0.5141999885067339,0.3649999918416138,0.5163999884575605).addAction("bezierCurveTo",0.3443499923031772,0.5185499884095037,0.3128999930061398,0.5254499882552768,0.2949999934062357,0.5316499881166963).addAction("bezierCurveTo",0.27709999380633166,0.5378499879781153,0.24674999448470736,0.5517999876663082,0.2274999949149783,0.5625999874249099).addAction("bezierCurveTo",0.20824999534524924,0.5733999871835112,0.17789999602362494,0.5868999868817628,0.15999999642372087,0.5925999867543577).addAction("bezierCurveTo",0.1420999968238168,0.5982999866269529,0.11289999747648816,0.6108999863453208,0.09499999787658409,0.6206499861273915).addAction("lineTo",0.062499998603015694,0.6383499857317654).addAction("bezierCurveTo",0.06139999862760215,0.5898999868147072,0.05644999873824341,0.5652499873656778,0.04974999888800058,0.5474999877624214).addAction("bezierCurveTo",0.04164999906904976,0.5261999882385133,0.030199999324977078,0.5093999886140228,0.01039999976754169,0.48959998905658697).addAction("bezierCurveTo",-0.009049999797717145,0.470099989492446,-0.026199999414384667,0.45839998975396146,-0.046249998966232386,0.45084998992271696).addAction("bezierCurveTo",-0.06204999861307492,0.4448999900557098,-0.08794999803416426,0.4389999901875852,-0.10374999768100723,0.43779999021440696).addAction("bezierCurveTo",-0.11954999732784977,0.43654999024234664,-0.13699999693781173,0.43679999023675853,-0.14249999681487724,0.4382999902032316).addAction("lineTo",-0.34249999234452844,-0.8668999806232751).addAction("moveTo",-0.3337499925401066,-0.4021499910112474).addAction("bezierCurveTo",-0.3481999922171237,-0.3982499910984192,-0.3695499917399143,-0.3901999912783509,-0.3812499914783989,-0.38429999141022586).addAction("bezierCurveTo",-0.392949991216883,-0.37839999154210124,-0.4148999907262625,-0.3641499918606139,-0.4299999903887515,-0.3526499921176587).addAction("bezierCurveTo",-0.44509999005124,-0.34109999237582134,-0.4656499895919115,-0.3217499928083276,-0.4756499893683941,-0.30959999307990094).addAction("bezierCurveTo",-0.48564998914487667,-0.2974499933514747,-0.4996999888308351,-0.27569999383762545,-0.5068999886699022,-0.2612499941606079).addAction("bezierCurveTo",-0.5140999885089697,-0.24679999448359036,-0.5233999883010987,-0.22204999503679623,-0.5275499882083388,-0.2062499953899537).addAction("bezierCurveTo",-0.5316999881155788,-0.19044999574311072,-0.5352499880362305,-0.15839999645948444,-0.5353999880328777,-0.1349999969825153).addAction("bezierCurveTo",-0.5355499880295249,-0.10559999763965644,-0.5324999880976979,-0.08244999815709919,-0.5254499882552772,-0.05999999865889594).addAction("bezierCurveTo",-0.519849988380447,-0.04214999905787442,-0.5067499886732549,-0.013149999706074667,-0.49639998890459536,0.004349999902769408).addAction("bezierCurveTo",-0.48599998913705367,0.021849999511613927,-0.46344998964108575,0.04939999889582358,-0.44624999002553567,0.06559999853372522).addAction("bezierCurveTo",-0.4290499904099856,0.08174999817274475,-0.404299990963191,0.10039999775588493,-0.39124999125488147,0.1069999976083631).addAction("bezierCurveTo",-0.37819999154657147,0.11354999746195871,-0.3539999920874837,0.1229999972507354,-0.3374999924562876,0.12794999714009414).addAction("bezierCurveTo",-0.3173499929066752,0.13399999700486642,-0.2919499934744092,0.13689999694004618,-0.2599999941885476,0.1366999969445164).addAction("bezierCurveTo",-0.23139999482780693,0.13654999694786918,-0.20154999549500685,0.13324999702162987,-0.1849999958649282,0.1283499971311537).addAction("bezierCurveTo",-0.16989999620243923,0.12384999723173662,-0.14364999678917245,0.11169999750330994,-0.12669999716803426,0.10134999773465081).addAction("bezierCurveTo",-0.1096999975480144,0.09099999796599123,-0.0871999980509286,0.0745499983336777,-0.07669999828562135,0.06484999855048956).addAction("bezierCurveTo",-0.06614999852143244,0.05514999876730142,-0.05034999887458991,0.03824999914504579,-0.0416499990690502,0.02734999938867988).addAction("bezierCurveTo",-0.032949999263510055,0.016449999632314416,-0.019799999557435832,-0.005999999865889283,-0.012499999720603672,-0.02249999949708581).addAction("bezierCurveTo",-0.005149999884888512,-0.03899999912828234,0.0029499999340618643,-0.06374999857507646,0.005549999875947176,-0.07749999826774001).addAction("bezierCurveTo",0.008149999817832931,-0.09124999796040356,0.010349999768659135,-0.1215999972820283,0.010449999766423801,-0.14499999675899744).addAction("bezierCurveTo",0.010649999761953577,-0.17729999603703606,0.007899999823421044,-0.1952999956347048,-0.0009499999787663249,-0.2199999950826168).addAction("bezierCurveTo",-0.007349999835714716,-0.23784999468363832,-0.020449999542906827,-0.265699994061142,-0.0300499993283303,-0.2818499937001615).addAction("bezierCurveTo",-0.039649999113753776,-0.2979499933402985,-0.06099999863654393,-0.3235499927680938,-0.07749999826774046,-0.33874999242834747).addAction("bezierCurveTo",-0.09399999789893654,-0.35389999208971856,-0.12324999724514818,-0.37384999164380117,-0.14249999681487724,-0.38304999143816554).addAction("bezierCurveTo",-0.1617499963846063,-0.392299991231412,-0.1898999957554044,-0.40214999101124693,-0.20499999541789338,-0.4049999909475446).addAction("bezierCurveTo",-0.22009999508038192,-0.40779999088495966,-0.24939999442547567,-0.4099499908369033,-0.26999999396503016,-0.4096999908424914).addAction("bezierCurveTo",-0.2906499935034663,-0.40949999084696165,-0.3192999928630891,-0.4060999909229577,-0.3337499925401066,-0.40214999101124693).addAction("lineTo",-0.34249999234452844,-0.8668999806232751).addAction("fill","#7c7c7c").addAction("closePath").addAction("beginPath").addAction("moveTo",-0.3224999927915633,-0.3694999917410313).addAction("bezierCurveTo",-0.33349999254569385,-0.3667999918013809,-0.3446499922964721,-0.36244999189861105,-0.3472499922383574,-0.3597999919578432).addAction("bezierCurveTo",-0.34984999218024315,-0.3571499920170753,-0.3549499920662491,-0.35499999206513166,-0.3584999919869003,-0.35499999206513166).addAction("bezierCurveTo",-0.3620999919064345,-0.35499999206513166,-0.3756999916024504,-0.34789999222382884,-0.3887499913107604,-0.3392499924171717).addAction("bezierCurveTo",-0.4017999910190704,-0.330549992611632,-0.42209999056533,-0.31424999297596523,-0.43379999030381455,-0.3029999932274223).addAction("bezierCurveTo",-0.4455499900411817,-0.29169999347999687,-0.45509998982772215,-0.27969999374821786,-0.45504998982884004,-0.27624999382533133).addAction("bezierCurveTo",-0.45504998982884004,-0.2727999939024448,-0.45669998979195947,-0.2699999939650297,-0.45874998974613845,-0.2699999939650297).addAction("bezierCurveTo",-0.46079998970031744,-0.27004999396391227,-0.46509998960420473,-0.26494999407790587,-0.4682999895326794,-0.2587499942164868).addAction("bezierCurveTo",-0.471499989461154,-0.25254999435506775,-0.47779998932033774,-0.23964999464340497,-0.4822499892208727,-0.2299999948590994).addAction("bezierCurveTo",-0.48674998912028977,-0.22039999507367591,-0.4919999890029434,-0.20574999540112904,-0.49394998895935727,-0.197499995585531).addAction("bezierCurveTo",-0.49589998891577114,-0.18924999576993295,-0.49724998888559657,-0.157749996474013,-0.49694998889230213,-0.12749999715015292).addAction("bezierCurveTo",-0.49649998890236047,-0.08269999815151108,-0.49449998894706404,-0.0687999984622003,-0.48619998913258344,-0.052499998826533556).addAction("bezierCurveTo",-0.48059998925775327,-0.04149999907240298,-0.47249998943880245,-0.02464999944902946,-0.46824998953379726,-0.014999999664723873).addAction("bezierCurveTo",-0.4639999896287921,-0.005399999879300399,-0.44574999003671145,0.016549999630078194,-0.4277499904390427,0.033749999245628715).addAction("bezierCurveTo",-0.4082999908737843,0.052299998831004224,-0.38229999145492943,0.0709499984141444,-0.36374999186955437,0.07969999821856666).addAction("bezierCurveTo",-0.3465499922540043,0.08774999803863492,-0.3234999927692117,0.09574999785982108,-0.31249999301508113,0.09739999782294051).addAction("bezierCurveTo",-0.3014999932609501,0.09904999778606038,-0.2789999937638643,0.10104999774135681,-0.2624999941326682,0.10184999772347503).addAction("bezierCurveTo",-0.2459999945014717,0.10264999770559369,-0.2234999950043859,0.10124999773688614,-0.2124999952502553,0.0987499977927655).addAction("bezierCurveTo",-0.2014999954961243,0.09629999784752741,-0.1800999959744516,0.08839999802410592,-0.16499999631196305,0.08129999818280353).addAction("bezierCurveTo",-0.14989999664947407,0.0741499983426186,-0.13694999693892917,0.06644999851472644,-0.13624999695457563,0.06414999856613601).addAction("bezierCurveTo",-0.13554999697022163,0.0618499986175447,-0.13219999704510021,0.05989999866113083,-0.1287499971222137,0.05984999866224827).addAction("bezierCurveTo",-0.12529999719932716,0.059749998664483606,-0.1095999975502493,0.046799998953938715,-0.09384999790228932,0.031099999304860848).addAction("bezierCurveTo",-0.07809999825432934,0.01534999965690087,-0.065149998543784,-0.00029999999329399785,-0.0650999985449019,-0.0037499999161809683).addAction("bezierCurveTo",-0.06504999854601934,-0.007199999839067495,-0.0632999985851348,-0.009949999777600027,-0.06124999863095626,-0.009849999779835361).addAction("bezierCurveTo",-0.05919999867677683,-0.009749999782070695,-0.05374999879859432,-0.018199999593198513,-0.04914999890141214,-0.028599999360740203).addAction("bezierCurveTo",-0.04459999900311251,-0.03899999912828234,-0.03919999912381167,-0.05199999883770978,-0.03714999916963313,-0.05749999871477485).addAction("bezierCurveTo",-0.0351499992143367,-0.06299999859184036,-0.032199999280274394,-0.0719999983906745,-0.030649999314919185,-0.07749999826774001).addAction("bezierCurveTo",-0.02909999934956442,-0.08299999814480552,-0.027849999377504098,-0.11339999746531237,-0.027849999377504098,-0.14499999675899744).addAction("bezierCurveTo",-0.027899999376386653,-0.1993499955441802,-0.02879999935626998,-0.2043499954324215,-0.04394999901764152,-0.236249994719401).addAction("bezierCurveTo",-0.05279999881982844,-0.25479999430477607,-0.07239999838173405,-0.28349999366328094,-0.08749999804422304,-0.29999999329447746).addAction("bezierCurveTo",-0.10259999770671158,-0.316499992925674,-0.11724999737925845,-0.3299999926239252,-0.11999999731779143,-0.3299999926239252).addAction("bezierCurveTo",-0.12274999725632396,-0.3299999926239252,-0.12929999710992002,-0.33394999253563595,-0.13454999699257364,-0.33874999242834747).addAction("bezierCurveTo",-0.13979999687522682,-0.343549992321059,-0.1549499965365979,-0.35144999214448047,-0.16829999623820235,-0.35629999203607454).addAction("bezierCurveTo",-0.18159999594092424,-0.3611499919276686,-0.19809999557212032,-0.3664999918080869,-0.20499999541789338,-0.36819999177008844).addAction("bezierCurveTo",-0.21189999526366599,-0.369949991730973,-0.236599994711578,-0.3720499916840345,-0.2599999941885476,-0.3728999916650353).addAction("bezierCurveTo",-0.2833999936655167,-0.3737499916460365,-0.3114999930374327,-0.37224999167956385,-0.3224999927915637,-0.3694999917410313).addAction("lineTo",-0.3224999927915633,-0.3694999917410313).addAction("fill","#999999").addAction("closePath")), new s.lm("Wax", 30 * 22.5, 10000, 0).setDescription("Don't ask where this came from.").setSize([2, 4, 6, 8, 10, 12, 14, 16, 18]).setDrawing(new s.H1().addAction("beginPath").addAction("moveTo",-0.06499999854713678,-0.9550999786518513).addAction("bezierCurveTo",-0.4810499892476945,-0.935199979096651,-0.5599999874830246,-0.930249979207292,-0.5737499871756881,-0.9232499793637543).addAction("bezierCurveTo",-0.5826999869756402,-0.9186999794654547,-0.5972999866493045,-0.9072499797213822,-0.6062499864492565,-0.8977999799326062).addAction("bezierCurveTo",-0.6162999862246215,-0.8871999801695347,-0.710449984120205,-0.7096999841369689,-0.8523499809484931,-0.43404999029822644).addAction("bezierCurveTo",-1.059549976317212,-0.0314999992959204,-1.0823999758064748,0.015199999660253205,-1.0841499757673594,0.03999999910593033).addAction("bezierCurveTo",-1.0853499757405374,0.05699999872595063,-1.0832999757863582,0.0741999983415007,-1.078799975886941,0.08499999810010195).addAction("bezierCurveTo",-1.074799975976348,0.09459999788552498,-0.9517999787256126,0.2892499935347588,-0.8054999819956721,0.5174999884329736).addAction("bezierCurveTo",-0.6242499860469253,0.8001999821141359,-0.5327499880921098,0.9384999790228905,-0.51844998841174,0.9513499787356703).addAction("bezierCurveTo",-0.5045499887224292,0.9638499784562735,-0.48989998904988186,0.9716999782808124,-0.4749999893829231,0.9746499782148748).addAction("bezierCurveTo",-0.459849989721552,0.9775999781489371,-0.2874999935738747,0.9712499782908708,0.052499998826533556,0.9552499786484985).addAction("bezierCurveTo",0.47909998929128017,0.9351499790977686,0.5599999874830246,0.9301999792084095,0.5737499871756881,0.9232499793637543).addAction("bezierCurveTo",0.5826999869756397,0.9186999794654547,0.597299986649305,0.907249979721382,0.6062499864492565,0.8977999799326057).addAction("bezierCurveTo",0.6162999862246217,0.8871999801695343,0.710449984120205,0.7096999841369684,0.8523499809484929,0.434049990298226).addAction("bezierCurveTo",1.0595499763172125,0.031499999295919956,1.0823999758064748,-0.015199999660254093,1.0841499757673594,-0.03999999910593077).addAction("bezierCurveTo",1.0853499757405372,-0.05699999872595107,1.0832999757863586,-0.0741999983415007,1.078799975886941,-0.08499999810010239).addAction("bezierCurveTo",1.0747999759763482,-0.09464999788440798,0.9517999787256124,-0.2892499935347592,0.8054999819956721,-0.5174999884329741).addAction("bezierCurveTo",0.6241999860480427,-0.8002999821119012,0.5327499880921098,-0.9384999790228905,0.51844998841174,-0.9513499787356707).addAction("bezierCurveTo",0.504349988726899,-0.9640499784518035,0.4896999890543525,-0.9717999782785773,0.4737499894108623,-0.9750999782048169).addAction("bezierCurveTo",0.4606999897025523,-0.9777999781444671,0.44494999005459235,-0.9796999781019988,0.4387499901931733,-0.979349978109822).addAction("bezierCurveTo",0.43254999033175423,-0.978999978117645,0.2058499953988937,-0.9680999783612791,-0.06499999854713678,-0.9550999786518517).addAction("lineTo",-0.06499999854713678,-0.9550999786518513).addAction("fill","#c8a826").addAction("closePath").addAction("beginPath").addAction("moveTo",-0.07499999832361937,-0.7541999831423163).addAction("bezierCurveTo",-0.2936499934364112,-0.7434499833825976,-0.47274998943321433,-0.7341999835893511,-0.4729999894276262,-0.733599983602762).addAction("bezierCurveTo",-0.47329998942092066,-0.7329999836161731,-0.562699987422675,-0.5597999874874948,-0.6717499849852175,-0.34874999220483005).addAction("bezierCurveTo",-0.7807999825477601,-0.13769999692216528,-0.86989998055622,0.03779999915510368,-0.8697999805584551,0.04124999907799065).addAction("bezierCurveTo",-0.8697499805595728,0.04469999900087762,-0.7645499829109759,0.2113499952759592,-0.6360499857831747,0.4115499908011402).addAction("lineTo",-0.4024999910034244,0.7756499826628711).addAction("bezierCurveTo",-0.2978499933425338,0.7710999827645715,-0.10099999774247426,0.7618999829702076,0.10249999770894647,0.752249983185902).addAction("bezierCurveTo",0.3059999931603672,0.7425499834027134,0.47269998943433134,0.7341499835904686,0.4729999894276262,0.7335999836027618).addAction("bezierCurveTo",0.4732499894220381,0.7329999836161729,0.5628499874193222,0.559249987499788,0.6720999849773945,0.3474999922327693).addAction("bezierCurveTo",0.7813499825354668,0.13574999696575052,0.8699999805539851,-0.04034999909810777,0.8690999805741013,-0.043799999020994296).addAction("bezierCurveTo",0.8681999805942184,-0.04729999894276293,0.7628999829478564,-0.21314999523572675,0.634999985806644,-0.4123999907821423).addAction("lineTo",0.40249999100342393,-0.7746499826852238).addAction("bezierCurveTo",0.340499992389232,-0.7738999827019877,0.14364999678917245,-0.7649499829020356,-0.07499999832361937,-0.7541999831423172).addAction("lineTo",-0.07499999832361937,-0.7541999831423163).addAction("fill","#f7cf2f").addAction("closePath"))]
              , h = t => n.findIndex((e => e.name === t));
            n[h("Web")].setShootOut(h("web.player.launched")),
            n[h("Peas")].setSplits(h("Pea.projectile"), 4),
            n[h("Grapes")].setSplits(h("projectile.grape"), 4);
            const r = [new s.XE("Ladybug",60,10,25,2.5).setNeutral(1).addDrop(h("Light"), .5).addDrop(h("Rose"), .5), new s.XE("Rock",75,10,27.5,0).addDrop(h("Rock"), .25).addDrop(h("Heavy"), .02, 2).addDrop(h("Moon"), .002, 6), new s.XE("Bee",35,50,25,4).setMoveInSines(1).setNeutral(1).addDrop(h("Stinger"), .5).addDrop(h("Pollen"), .25).addDrop(h("Honey"), .25), new s.XE("Spider",60,15,20,4).setAggressive(1).setPoison(5, 3).setProjectile({
                petalIndex: h("Web") + 1,
                cooldown: 22.5,
                health: 1 / 0,
                damage: 0,
                speed: 0,
                range: 175,
                size: 1,
                runs: !0,
                nullCollision: !0
            }).addDrop(h("Faster"), .5).addDrop(h("Web"), .5).addDrop(h("Third Eye"), .025, 5), new s.XE("Beetle",30,10,30,3).setAggressive(1).addDrop(h("Beetle Egg"), 1).addDrop(h("Beetle Egg"), 1), new s.XE("Leafbug",35,3.5,30,2.5).setNeutral(1).setDamageReduction(.13).addDrop(h("Leaf")).addDrop(h("Bone"), .5).addDrop(h("Cactus"), .25), new s.XE("Roach",30,5,30,5.5).setNeutral(1).addDrop(h("Antennae"), 1, 2).addDrop(h("Magnolia"), .6).addDrop(h("Bone"), .6), new s.XE("Hornet",60,50,30,3).setAggressive(1).setProjectile({
                petalIndex: h("Missile"),
                cooldown: 45,
                health: 5,
                damage: 10,
                speed: 5,
                range: 40
            }).addDrop(h("Missile"), .5).addDrop(h("Antennae"), .25, 2).addDrop(h("Orange"), .5), new s.XE("Mantis",35,10,32.5,2).setAggressive(1).setProjectile({
                petalIndex: h("Pea.projectile"),
                cooldown: 140.625,
                health: 1.25,
                damage: 1.5,
                speed: 4.5,
                range: 55,
                size: .2,
                multiShot: {
                    count: 3,
                    delay: 256
                }
            }).addDrop(h("Peas")).addDrop(h("Antennae"), .5, 2), new s.XE("Pupa",40,10,30,1).setAggressive(1).setProjectile({
                petalIndex: h("Rock"),
                cooldown: 78.75,
                health: .8,
                damage: 1.1,
                speed: 4,
                range: 45,
                size: .3,
                multiShot: {
                    count: 5,
                    delay: 10,
                    spread: .2
                }
            }).addDrop(h("Rock")).addDrop(h("Wing")).addDrop(h("Heavy"), .5, 2), new s.XE("Sandstorm",75,40,35,3).setSandstormMovement(1).setSize(35, s.rx.SIZE_SCALE, .9, .25).addDrop(h("Sand"), .25).addDrop(h("Glass"), .25).addDrop(h("Stick"), .1, 3), new s.XE("Scorpion",100,15,32.5,3).setAggressive(1).setStrafes(30, 15, 1.25).setProjectile({
                petalIndex: h("Scorpion Missile.projectile"),
                cooldown: 45,
                health: 2,
                damage: 2,
                speed: 5,
                range: 65,
                size: .2
            }).addDrop(h("Pincer"), .5).addDrop(h("Iris"), .5), new s.XE("Demon",100,7.5,35,1).setAggressive(1).setPushability(.8).setProjectile({
                petalIndex: h("Missile"),
                cooldown: 112.5,
                health: 1,
                damage: 1,
                speed: 5,
                range: 120,
                size: .1334,
                multiShot: {
                    count: 4,
                    delay: 128,
                    spread: .5
                }
            }).addDrop(h("Bone")).addDrop(h("Lightning"), .2).addDrop(h("Fire Spellbook"), .03), new s.XE("Jellyfish",40,15,30,2.5).setAggressive(1).setLightning([75, 75, 75, 65, 65, 65, 55, 55, 55, 45, 35, 25], [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8], 125, 2).addDrop(h("Lightning")).addDrop(h("Jelly")), new s.XE("Cactus",45,35,30,0).setPushability(.2).addDrop(h("Cactus"), 1.34), new s.XE("Baby Ant",25,10,15,2).addDrop(h("Light"), .5).addDrop(h("Leaf"), .25).addDrop(h("Rice"), 1), new s.XE("Worker Ant",60,10,15,3.25).setNeutral(1).addDrop(h("Leaf"), .25).addDrop(h("Corn"), .25), new s.XE("Soldier Ant",100,10,15,3.5).setAggressive(1).addDrop(h("Wing"), .5).addDrop(h("Glass"), .666), new s.XE("Queen Ant",250,10,25,3.5).setAggressive(1).setPushability(.8).addDrop(h("Ant Egg"), 1), new s.XE("Ant Hole",750,15,25,0).setPushability(0).addDrop(h("Dirt"), 1).addDrop(h("Ant Egg"), 1).addDrop(h("Ant Egg"), 1), new s.XE("Baby Fire Ant",25,20,15,2).addDrop(h("Light"), .5).addDrop(h("Yucca"), .25), new s.XE("Worker Fire Ant",60,20,15,3.25).setNeutral(1).addDrop(h("Corn"), .25).addDrop(h("Yucca"), .25), new s.XE("Soldier Fire Ant",100,20,15,3.5).setAggressive(1).addDrop(h("Glass"), .5).addDrop(h("Yucca"), .25), new s.XE("Queen Fire Ant",250,20,25,3.5).setAggressive(1).setPushability(.8).addDrop(h("Ant Egg"), 1), new s.XE("Fire Ant Hole",750,30,25,0).setPushability(0).addDrop(h("Dirt")).addDrop(h("Ant Egg"), 1).addDrop(h("Ant Egg"), 1).addDrop(h("Magnet"), 1, 2), new s.XE("Baby Termite",25,10,15,2).setDamageReduction(.1).setDamageReflection(.05, .5).addDrop(h("Amulet"), .15), new s.XE("Worker Termite",60,10,15,3.25).setNeutral(1).setDamageReduction(.1).setDamageReflection(.05, .5).addDrop(h("Amulet"), .15), new s.XE("Soldier Termite",100,10,15,3.5).setAggressive(1).setDamageReduction(.1).setDamageReflection(.05, .5).addDrop(h("Bone"), .5).addDrop(h("Amulet"), .15), new s.XE("Termite Overmind",500,10,30,.5).setAggressive(1).setPushability(.5).setDamageReduction(.1).setDamageReflection(.05, .5).addDrop(h("Ant Egg"), 1).addDrop(h("Amulet"), .4), new s.XE("Termite Mound",750,15,30,0).setDamageReduction(.1).setPushability(0).addDrop(h("Dirt")).addDrop(h("Armor"), .75).addDrop(h("Magnet"), .5), new s.XE("Ant Egg",150,3,15,0).addDrop(h("Ant Egg"), .5), new s.XE("Queen Ant Egg",150,3,15,0), new s.XE("Fire Ant Egg",150,3,15,0).addDrop(h("Ant Egg")), new s.XE("Queen Fire Ant Egg",150,3,15,0), new s.XE("Termite Egg",150,3,15,0).addDrop(h("Ant Egg"), .5), new s.XE("Evil Ladybug",85,10,25,2.5).setAggressive(1).setDamageReduction(.125).addDrop(h("Dahlia")).addDrop(h("Yin Yang"), .15), new s.XE("Shiny Ladybug",25,10,25,2.5).setNeutral(1).addDrop(h("Yggdrasil"), .15, 4), new s.XE("Angelic Ladybug",55,15,25,2.5).setNeutral(1).setDamageReflection(.05, .5).addDrop(h("Dahlia")).addDrop(h("Yin Yang"), .15).addDrop(h("Third Eye"), .05, 3), new s.XE("Centipede",25,10,22.5,3.5).setNeutral(1).setCentipedeMovement(1).addDrop(h("Peas"), .25).addDrop(h("Leaf"), .25), new s.XE("Centipede",25,10,22.5,3.5).setSystem(1).setNeutral(1).setCentipedeMovement(1).addDrop(h("Peas"), .25).addDrop(h("Leaf"), .25), new s.XE("Desert Centipede",25,10,22.5,5).setDesertCentipedeMovement(1).addDrop(h("Powder"), .25).addDrop(h("Sand"), .1), new s.XE("Desert Centipede",25,10,22.5,5).setSystem(1).setDesertCentipedeMovement(1).addDrop(h("Powder"), .25).addDrop(h("Sand"), .1), new s.XE("Evil Centipede",25,10,22.5,3.5).setAggressive(1).setCentipedeMovement(1).addDrop(h("Iris"), .25).addDrop(h("Grapes"), .1), new s.XE("Evil Centipede",25,10,22.5,3.5).setSystem(1).setAggressive(1).setCentipedeMovement(1).addDrop(h("Iris"), .25).addDrop(h("Grapes"), .1), new s.XE("Dandelion",25,15,22.5,0).setPushability(.5).addDrop(h("Dandelion")).addDrop(h("Pollen"), .1), new s.XE("Sponge",35,3,30,0).addDrop(h("Sponge")), new s.XE("Bubble",1,1,30,0).addDrop(h("Bubble"), .8).addDrop(h("Air"), .8), new s.XE("Shell",40,10,32.5,25).setMovesInBursts(1).setNeutral(1).addDrop(h("Shell"), .8).addDrop(h("Pearl"), .5).addDrop(h("Magnet"), .2), new s.XE("Starfish",30,10,30,4).setAggressive(1).setSpins(1).setHealing(.007).setFleeAtLowHealth(.35).addDrop(h("Starfish"), .85).addDrop(h("Sand"), .85), new s.XE("Leech",25,3.5,16,5.5).setAggressive(1).addDrop(h("Fang")).addDrop(h("Faster")), new s.XE("Maggot",30,10,35,2).setAggressive(1).setProjectile({
                petalIndex: h("Goo"),
                cooldown: 61.875,
                health: 2,
                damage: 1,
                speed: 3,
                range: 45,
                size: .35
            }).addDrop(h("Goo")).addDrop(h("Maggot Poo"), .5).addDrop(h("Dirt"), .65), new s.XE("Firefly",30,10,25,4).setMoveInSines(1).addDrop(h("Wing")).addDrop(h("Lightbulb"), .6).addDrop(h("Battery"), .4), new s.XE("Bumblebee",25,15,30,5).setMoveInSines(1).setBumblebeeMovement(1).setProjectile({
                petalIndex: h("Pollen"),
                cooldown: 11.25,
                health: 1,
                damage: 1,
                speed: 0,
                range: 90
            }).addDrop(h("Pollen")).addDrop(h("Honey")).addDrop(h("Wax"), .5, 1), new s.XE("Moth",25,10,25,3).setMoveInSines(1).setNeutral(1).setFleeAtLowHealth(1).addDrop(h("Wing")).addDrop(h("Lightbulb"), .6).addDrop(h("Dust"), .4), new s.XE("Fly",15,2.5,20,6).setAggressive(1).setMoveInSines(1).addDrop(h("Wing")).addDrop(h("Faster"), .8).addDrop(h("Third Eye"), .02, 5), new s.XE("Square",50,3.5,30,0).addDrop(h("Square Egg")), new s.XE("Triangle",100,5.5,32.5,0).addDrop(h("Triangle Egg")), new s.XE("Pentagon",150,7.5,35,0).addDrop(h("Pentagon Egg")), new s.XE("Hell Beetle",35,15,35,4).setAggressive(1).setPushability(.8).addDrop(h("Dust"), .8).addDrop(h("Pincer"), .8).addDrop(h("Beetle Egg"), .8), new s.XE("Hell Spider",25,15,20,4).setAggressive(1).setPoison(5, 3).setPushability(.8).addDrop(h("Faster")).addDrop(h("Web"), .5).addDrop(h("Dahlia"), .5).setProjectile({
                petalIndex: h("Web") + 1,
                cooldown: 22.5,
                health: 1 / 0,
                damage: 0,
                speed: 0,
                range: 175,
                size: 1,
                runs: !0,
                nullCollision: !0
            }), new s.XE("Hell Yellowjacket",65,5,25,4).setAggressive(1).setProjectile({
                petalIndex: h("Missile"),
                cooldown: 90,
                health: 4,
                damage: 4,
                speed: 4.5,
                range: 65,
                aimbot: !0
            }).setPushability(.8).addDrop(h("Missile")).addDrop(h("Antennae"), 1, 2), new s.XE("Termite Overmind Egg",20,1,15,0), new s.XE("Spirit",1e-15,0,35,1).setSpins(4, 1).addDrop(h("Candy"), .1), new s.XE("Wasp",40,15,35,3).setAggressive(1).setProjectile({
                petalIndex: h("Wasp Missile.projectile"),
                cooldown: 112.5,
                health: 13,
                damage: 1.25,
                speed: 2.5,
                range: 185,
                multiShot: {
                    count: 3,
                    delay: 256,
                    spread: .2
                }
            }).addDrop(h("Missile")).setPushability(.8).addDrop(h("Antennae"), 1, 2).addDrop(h("Pollen"), .4), new s.XE("Stickbug",15,4,10,6.5).setAggressive(1).setPoison(2, 4).addDrop(h("Iris"), .75).addDrop(h("Powder")), new s.XE("Shrub",25,10,30,0).setPoison(3, 5).setPushability(.5).addDrop(h("Iris"), .75).addDrop(h("Shrub"), .6).addDrop(h("Leaf")), new s.XE("Hell Centipede",25,10,22.5,4).setAggressive(1).setSize(22.5, s.rx.SIZE_SCALE, .75, .25).addDrop(h("Powder"), .5).addDrop(h("Dust"), .5), new s.XE("Hell Centipede",25,10,22.5,4).setSystem(1).setAggressive(1).setSize(22.5, s.rx.SIZE_SCALE, .75, .25).addDrop(h("Powder"), .5).addDrop(h("Dust"), .5), new s.XE("Wilt",25,10,30,0).setPushability(0).addDrop(h("Branch")).addDrop(h("Leaf"), .6), new s.XE("Wilt",25,10,15,2.75).setSystem(1).setAggressive(1).addDrop(h("Branch")).addDrop(h("Leaf"), .6), new s.XE("Pumpkin",40,10,20,0).setSize(20, s.rx.SIZE_SCALE, .75, .25).addDrop(h("Leaf"), .5).addDrop(h("Candy"), .6).addDrop(h("Lantern"), .1), new s.XE("Jack O' Lantern",40,10,20,0).setAggressive(1).setProjectile({
                petalIndex: h("Candy"),
                cooldown: 22.5 * .175,
                health: 1,
                damage: 1,
                speed: 5,
                range: 20,
                size: .4
            }).addDrop(h("Rock"), .8).addDrop(h("Candy"), .6).addDrop(h("Lantern"), .1), new s.XE("Crab",30,10,30,7).setAggressive(1).setStrafes(125, 25, .5).addDrop(h("Sand"), .4).addDrop(h("Claw"), .8), new s.XE("Tank",50,3,20,2).setAggressive(1).setProjectile({
                petalIndex: h("Bullet.projectile"),
                cooldown: 16.875,
                health: 7.5,
                damage: 2.5,
                speed: 2.5,
                range: 33.75,
                size: .3,
                aimbot: !0
            }).addDrop(h("Square Egg"), .1).addDrop(h("Triangle Egg"), .05).addDrop(h("Pentagon Egg"), .01)]
              , o = t => r.findIndex((e => e.name === t));
            function l(t) {
                for (let e = 0; e < r.length; e++)
                    if (t(r[e]))
                        return e;
                return -1
            }
            n[h("Beetle Egg")].setSpawnable(o("Beetle"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1),
            n[h("Stick")].setSpawnable(o("Sandstorm"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1),
            n[h("Ant Egg")].setSpawnable(o("Soldier Ant"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1),
            n[h("Branch")].setSpawnable(o("Wilt") + 1, [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
            n[h("Leech Egg")].setSpawnable(o("Leech"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3),
            n[h("Hornet Egg")].setSpawnable(o("Hornet"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
            n[h("Square Egg")].setSpawnable(o("Square"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2),
            n[h("Triangle Egg")].setSpawnable(o("Triangle"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2),
            n[h("Pentagon Egg")].setSpawnable(o("Pentagon"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2),
            r[o("Angelic Ladybug")].setPoopable({
                index: o("Evil Ladybug"),
                interval: 135
            }),
            r[o("Ant Hole")].setAntHoleSpawns([{
                index: o("Baby Ant"),
                count: [4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]
            }, {
                index: o("Worker Ant"),
                count: [5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8]
            }, {
                index: o("Soldier Ant"),
                count: [6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]
            }, {
                index: o("Ant Egg"),
                count: 5
            }, {
                index: o("Queen Ant"),
                count: 1,
                minHealthRatio: .01
            }]),
            r[o("Fire Ant Hole")].setAntHoleSpawns([{
                index: o("Baby Fire Ant"),
                count: [4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]
            }, {
                index: o("Worker Fire Ant"),
                count: [5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8]
            }, {
                index: o("Soldier Fire Ant"),
                count: [6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]
            }, {
                index: o("Fire Ant Egg"),
                count: 5
            }, {
                index: o("Queen Fire Ant"),
                count: 1,
                minHealthRatio: .01
            }]),
            r[o("Termite Mound")].setAntHoleSpawns([{
                index: o("Baby Termite"),
                count: 6
            }, {
                index: o("Worker Termite"),
                count: 8
            }, {
                index: o("Soldier Termite"),
                count: 8
            }, {
                index: o("Termite Egg"),
                count: 5
            }, {
                index: o("Termite Overmind"),
                count: 1,
                minHealthRatio: .01
            }]),
            r[o("Ant Egg")].setHatchables([{
                index: o("Baby Ant"),
                time: 337.5
            }, {
                index: o("Worker Ant"),
                time: 562.5
            }, {
                index: o("Soldier Ant"),
                time: 787.5
            }]),
            r[o("Queen Ant Egg")].setHatchables({
                index: o("Soldier Ant"),
                time: 33.75
            }),
            r[o("Queen Ant")].setPoopable({
                index: o("Queen Ant Egg"),
                interval: 45
            }),
            r[o("Fire Ant Egg")].setHatchables([{
                index: o("Baby Fire Ant"),
                time: 337.5
            }, {
                index: o("Worker Fire Ant"),
                time: 562.5
            }, {
                index: o("Soldier Fire Ant"),
                time: 787.5
            }]),
            r[o("Queen Fire Ant Egg")].setHatchables({
                index: o("Soldier Fire Ant"),
                time: 33.75
            }),
            r[o("Queen Fire Ant")].setPoopable({
                index: o("Queen Fire Ant Egg"),
                interval: 45
            }),
            r[o("Termite Egg")].setHatchables([{
                index: o("Baby Termite"),
                time: 337.5
            }, {
                index: o("Worker Termite"),
                time: 562.5
            }, {
                index: o("Soldier Termite"),
                time: 787.5
            }]),
            r[o("Termite Overmind Egg")].setHatchables({
                index: o("Soldier Termite"),
                time: 45
            }),
            r[o("Termite Overmind")].setPoopable({
                index: o("Termite Overmind Egg"),
                interval: 90
            }),
            r[o("Centipede")].segmentWith(l((t => t.isSystem && "Centipede" === t.name))),
            r[o("Desert Centipede")].segmentWith(l((t => t.isSystem && "Desert Centipede" === t.name))),
            r[o("Evil Centipede")].segmentWith(l((t => t.isSystem && "Evil Centipede" === t.name))),
            r[o("Hell Centipede")].segmentWith(l((t => t.isSystem && "Hell Centipede" === t.name))),
            r[o("Wilt")].branchWith(l((t => t.isSystem && "Wilt" === t.name)), 5, 2);
            const d = n.length;
            r.length;
            console.log("config.js loaded", n.length, "petals", r.length, "mobs.");
            const c = t => {
                const e = [];
                return r.forEach((i => {
                    i.drops.forEach((i => {
                        i.index > -1 && t >= i.minRarity && e.push(i.index)
                    }
                    ))
                }
                )),
                e[Math.random() * e.length | 0]
            }
            let logdata = "Mobs loaded: "
            r.forEach(n => {
                logdata += `"${n.name}", `
            })
            console.log(logdata);
            logdata = "Petals loaded: "
            n.forEach(u => {
                logdata += `"${u.name}", `
            })

            console.log(logdata);
        }
        ,
        512: (t, e, i) => {
            i.d(e, {
                A: () => r
            });
            var s = i(110)
              , a = i(874);
            class n {
                constructor() {
                    this.grid = new Map
                }
                clear() {
                    this.grid.clear()
                }
                insert(t) {
                    const e = t._AABB.x1 >> 6
                      , i = t._AABB.y1 >> 6
                      , s = t._AABB.x2 >> 6
                      , a = t._AABB.y2 >> 6;
                    for (let n = i; n <= a; n++)
                        for (let i = e; i <= s; i++) {
                            const e = i | n << 6;
                            this.grid.has(e) ? this.grid.get(e).push(t) : this.grid.set(e, [t])
                        }
                }
                retrieve(t) {
                    const e = new Map
                      , i = t._AABB.x1 >> 6
                      , s = t._AABB.y1 >> 6
                      , a = t._AABB.x2 >> 6
                      , n = t._AABB.y2 >> 6;
                    for (let h = s; h <= n; h++)
                        for (let s = i; s <= a; s++) {
                            const i = s | h << 6;
                            if (!this.grid.has(i))
                                continue;
                            const a = this.grid.get(i);
                            for (let i = 0; i < a.length; i++)
                                !e.has(a[i].id) && this.hitDetection(t, a[i]) && e.set(a[i].id, a[i])
                        }
                    return e
                }
                hitDetection(t, e) {
                    return !(t._AABB.x1 > e._AABB.x2 || t._AABB.y1 > e._AABB.y2 || t._AABB.x2 < e._AABB.x1 || t._AABB.y2 < e._AABB.y1)
                }
                getAABB(t) {
                    const e = t.width * t.size
                      , i = t.height * t.size;
                    return {
                        x1: t.x - e,
                        y1: t.y - i,
                        x2: t.x + e,
                        y2: t.y + i
                    }
                }
            }
            const h = {
                router: null,
                width: 1024,
                height: 1024,
                isRadial: !1,
                isLineMap: !1,
                biome: 0,
                announceRarity: 7,
                gamemode: s.LX.FFA,
                isTDM: !1,
                teamCount: 2,
                isWaves: !1,
                currentWave: 0,
                mobsExpire: !1,
                dynamicRoom: !0,
                teamMinimaps: [],
                random: () => {
                    if (h.isRadial) {
                        const t = Math.random() * Math.PI * 2
                          , e = Math.random() * h.width / 2;
                        return {
                            x: Math.cos(t) * e,
                            y: Math.sin(t) * e
                        }
                    }
                    return {
                        x: -h.width / 2 + Math.random() * h.width,
                        y: -h.height / 2 + Math.random() * h.height
                    }
                }
                ,
                mapSpawns: null,
                maxMapDistFromSpawn: 0,
                mapData: [],
                mapBasedSpawn(t, e) {
                    if (null == h.mapSpawns || null == h.mapSpawns[t])
                        return h.random();
                    let i = h.mapSpawns[t];
                    if (t == s.wv.PLAYER) {
                        let t = 0;
                        i = i.filter((t => {
                            if (t.rarity <= e.highestRarity)
                                return !0
                        }
                        )),
                        i.forEach((e => {
                            t = Math.max(e.rarity, t)
                        }
                        )),
                        i = i.filter((e => {
                            if (e.rarity >= t)
                                return !0
                        }
                        ))
                    }
                    const a = i[Math.floor(Math.random() * i.length)];
                    return {
                        x: a.x * h.width,
                        y: a.y * h.height,
                        rarity: a.rarity
                    }
                },
                isValidMapSpawn: (t, e) => {
                    if (0 === h.mapData.cells.length)
                        return !0;
                    const i = Math.floor((t + h.width / 2) / h.width * h.terrainGridWidth)
                      , s = Math.floor((e + h.height / 2) / h.height * h.terrainGridHeight);
                    return !(i < 0 || i >= h.terrainGridWidth || s < 0 || s >= h.terrainGridHeight) && 0 !== h.mapDataAt(t, e).type
                }
                ,
                mapDataAt: (t, e) => {
                    const i = Math.floor((t + h.width / 2) / h.width * h.terrainGridWidth)
                      , s = Math.floor((e + h.height / 2) / h.height * h.terrainGridHeight);
                    return i < 0 || i >= h.terrainGridWidth || s < 0 || s >= h.terrainGridHeight ? null : h.mapData.cells.filter((t => {
                        if (t.x == i && t.y == s)
                            return !0
                    }
                    ))[0]
                }
                ,
                mapSpawnClosestTo: (t, e) => {
                    if (0 === h.mapData.length)
                        return h.random();
                    t /= h.width,
                    e /= h.height;
                    let i, s = 1 / 0;
                    for (const n in h.mapSpawns) {
                        const r = h.mapSpawns[n];
                        for (const n of r) {
                            const h = (0,
                            a.t1)(n, {
                                x: t,
                                y: e
                            });
                            h < s && (i = n,
                            s = h)
                        }
                    }
                    return i
                }
                ,
                getPlayerSpawn: t => {
                    if (!h.isLineMap) {
                        return h.mapBasedSpawn(s.wv.PLAYER, t)
                    }
                    return {
                        x: Math.max(-h.width / 2 + 25, Math.min(h.width / 2 - 25, -h.width / 2 + Math.min(t.level / 50, 1) * h.width / 1.5 + 64 * (Math.random() - .5))),
                        y: -h.height / 2 + Math.random() * h.height
                    }
                }
                ,
                spawnNearPlayer: t => {
                    const e = [];
                    if (h.clients.forEach((t => {
                        t.camera && e.push({
                            highestRarity: t.highestRarity,
                            x: t.camera.x,
                            y: t.camera.y,
                            size: t.body?.size ?? 1
                        })
                    }
                    )),
                    0 === e.length)
                        return {
                            position: h.mapBasedSpawn(s.wv.MOB),
                            rarity: 3 * Math.random() | 0
                        };
                    const i = e[Math.floor(Math.random() * e.length)];
                    let a, n = 0, r = i.size + 256, o = !1, l = 0;
                    do {
                        const e = Math.random() * Math.PI * 2
                          , s = r + 1024 * Math.random();
                        a = {
                            x: i.x + Math.cos(e) * s,
                            y: i.y + Math.sin(e) * s
                        };
                        const n = i.x - a.x
                          , d = i.y - a.y;
                        if (n * n + d * d > r * r && h.isValidMapSpawn(a.x, a.y)) {
                            const e = h.mapSpawnClosestTo(a.x, a.y).rarity
                              , i = Math.random() > .5 * Math.pow(1.1015, e);
                            l = Math.min(11, Math.max(0, i ? e + 1 : e - (2 * Math.random() | 0)));
                            if (0 === h.spatialHash.retrieve({
                                _AABB: {
                                    x1: a.x - t.tiers[l].size,
                                    y1: a.y - t.tiers[l].size,
                                    x2: a.x + t.tiers[l].size,
                                    y2: a.y + t.tiers[l].size
                                }
                            }).size) {
                                o = !0;
                                break
                            }
                        }
                    } while (++n < 100);
                    return o || (a = h.mapBasedSpawn(s.wv.MOB)),
                    {
                        position: a,
                        rarity: l,
                        tile: h.mapDataAt(a.x, a.y)
                    }
                }
                ,
                lineMapMobSpawn: t => {
                    const e = [];
                    if (h.clients.forEach((t => {
                        t.body && e.push({
                            highestRarity: t.highestRarity,
                            x: t.body.x,
                            y: t.body.y
                        })
                    }
                    )),
                    0 === e.length) {
                        const t = h.random();
                        return t.x = Math.max(-h.width / 2 + 25, Math.min(-25, t.x)),
                        {
                            position: t,
                            rarity: Math.min(10, Math.max(0, Math.floor((t.x + h.width / 2) / h.width * 10 + 2 * (Math.random() - .5))))
                        }
                    }
                    const i = e[Math.floor(Math.random() * e.length)];
                    let s = Math.min(10, i.highestRarity + (Math.random() > .8), Math.max(0, Math.floor((i.x + h.width / 2) / h.width * 10 + 2 * (Math.random() - .5))))
                      , n = 0
                      , r = 0
                      , o = 0;
                    do {
                        const e = Math.random() * Math.PI * 2
                          , a = 128 + 8 * t.tiers[s].size + Math.random() * t.tiers[s].size * 12;
                        n = i.x + Math.cos(e) * a,
                        r = i.y + Math.sin(e) * a,
                        n = Math.max(-h.width / 2 + 25, Math.min(h.width / 2 - 25, n)),
                        r = Math.max(-h.height / 2 + 25, Math.min(h.height / 2 - 25, r)),
                        o > 0 && o % 10 == 9 && (s = Math.max(0, s - 1))
                    } while (e.some((t => (0,
                    a.t1)(t, {
                        x: n,
                        y: r
                    }) < 128)) && o++ < 100);
                    return {
                        position: {
                            x: n,
                            y: r
                        },
                        rarity: s
                    }
                }
                ,
                spatialHash: new n,
                viewsSpatialHash: new n,
                terrainSpatialHash: new n,
                entities: new Map,
                drops: new Map,
                clients: new Map,
                pentagrams: new Map,
                lightning: new Map,
                terrain: new Map,
                terrainGridWidth: 0,
                terrainGridHeight: 0,
                maxMobs: 6,
                livingMobCount: 0,
                aliveMobs: [],
                alivePlayers: [],
                inventory: Object.fromEntries(s.cK.map((t => [t.name, {}]))),
                secretKey: crypto.getRandomValues(new Uint8Array(32)).join(""),
                zones: [],
                lag: {
                    fps: 20,
                    mspt: 0,
                    ticks: 0,
                    totalTime: 0
                },
                updateTerrain: () => {
                    h.terrainSpatialHash.clear(),
                    h.terrain.forEach((t => {
                        t._AABB = t.polygon._AABB,
                        h.terrainSpatialHash.insert(t)
                    }
                    ))
                }
                ,
                sendTerrain: t => {
                    const e = new s.AU(!0);
                    e.setUint8(s.jU.PIPE_PACKET),
                    e.setUint16(t > 0 ? t : 0),
                    e.setUint8(s.de.TERRAIN),
                    e.setUint16(h.terrainGridWidth),
                    e.setUint16(h.terrainGridHeight),
                    e.setUint16(h.terrain.size),
                    h.terrain.forEach((t => {
                        e.setInt16(t.gridX),
                        e.setInt16(t.gridY),
                        e.setUint8(t.type[0]),
                        e.setUint8(t.type[1])
                    }
                    )),
                    h.router.postMessage(e.build())
                }
                ,
                mobTable: null
            };
            h.inventory && s.cK.forEach((t => {
                h.inventory[t.name] = {}
            }
            ));
            const r = h
        }
        ,
        874: (t, e, i) => {
            i.d(e, {
                Br: () => d,
                FL: () => r,
                Iv: () => g,
                TH: () => c,
                UU: () => l,
                ZL: () => h,
                jd: () => n,
                nU: () => s,
                t1: () => o
            });
            function s(t, e, i) {
                const s = (1 - i) * Math.cos(t) + i * Math.cos(e)
                  , a = (1 - i) * Math.sin(t) + i * Math.sin(e);
                return Math.atan2(a, s)
            }
            const a = .6375;
            function n(t, e) {
                const i = Math.min(11, Math.min(t, e + 1))
                  , s = Math.max(0, i - 2);
                if (s > i)
                    return s;
                let n = s;
                const h = Math.pow(a, i);
                for (let t = s; t < i; t++)
                    Math.random() < h && n++;
                return n
            }
            function h(t, e, i) {
                let s = t % e / e
                  , a = Math.floor(t / e);
                return Math.random() < s && a++,
                Math.random() < .082 && (a++,
                Math.random() < .023 && a++),
                Math.random() < .091 && a--,
                Math.random() < .074 && a--,
                Math.random() < .025 && a--,
                Math.min(i, Math.max(0, a))
            }
            function r(t, e) {
                const i = t - e;
                return Math.atan2(Math.sin(i), Math.cos(i))
            }
            function o(t, e) {
                const i = t.x - e.x
                  , s = t.y - e.y;
                return i * i + s * s
            }
            function l(t) {
                return Math.pow(t, 2.35) + Math.exp(t / 25)
            }
            function d(t, e=!1) {
                return /^[aeiou]/i.test(t) ? (e ? "An" : "an") + " " + t : (e ? "A" : "a") + " " + t
            }
            function c(t, e=!1) {
                const i = {
                    y: "ies",
                    h: "hes",
                    s: "ses",
                    x: "xes",
                    o: "oes"
                };
                for (const [e,s] of Object.entries(i))
                    if (t.endsWith(e)) {
                        t = t.slice(0, -e.length) + s;
                        break
                    }
                return Object.keys(i).some((e => t.endsWith(i[e]))) || (t += "s"),
                e && (t = t.charAt(0).toUpperCase() + t.slice(1)),
                t
            }
            const g = ( () => {
                const t = new Date
                  , e = t.getMonth() + 1
                  , i = t.getDate();
                return 10 === e && i >= 31 || 11 === e && i <= 7
            }
            )()
        }
        ,
        904: (t, e, i) => {
            i.d(e, {
                cS: () => u,
                Bw: () => y,
                ai: () => p,
                M_: () => M
            });
            var s = i(110)
              , a = i(874)
              , n = i(446)
              , h = i(512);
            class r {
                constructor(t=0, e=0) {
                    this.x = t,
                    this.y = e
                }
                get magnitude() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }
                get angle() {
                    return Math.atan2(this.y, this.x)
                }
                multiply(t) {
                    return this.x *= t,
                    this.y *= t,
                    this
                }
                divide(t) {
                    return this.x /= t,
                    this.y /= t,
                    this
                }
                add(t) {
                    return this.x += t.x,
                    this.y += t.y,
                    this
                }
                subtract(t) {
                    return this.x -= t.x,
                    this.y -= t.y,
                    this
                }
                normalize() {
                    return this.divide(Math.max(1e-4, this.magnitude))
                }
                addDirection(t, e) {
                    return this.x += e * Math.cos(t),
                    this.y += e * Math.sin(t),
                    this
                }
                zero() {
                    return this.x = 0,
                    this.y = 0,
                    this
                }
            }
            class o {
                constructor(t) {
                    this.health = t,
                    this.maxHealth = t,
                    this.lastDamaged = 0,
                    this.damageReduction = 0,
                    this.invulnerable = !1,
                    this.onDamage = null,
                    this.shield = 0
                }
                set(t, e=!0) {
                    this.health = t * (e ? this.ratio : 1),
                    this.maxHealth = t,
                    this.shield = Math.min(this.shield, this.maxHealth)
                }
                damage(t) {
                    if (this.invulnerable)
                        return 0;
                    let e = 0;
                    if (this.shield > 0 && (e = Math.min(this.shield, t),
                    this.shield -= e),
                    this.shield <= 0) {
                        const i = Math.max(0, Math.min(this.health, t - e - (t - e) * Math.min(.75, this.damageReduction)));
                        this.health = this.health - i,
                        e += i
                    }
                    return this.lastDamaged = Date.now(),
                    this.onDamage && this.onDamage(e),
                    e
                }
                deteriorateShield() {
                    this.shield = Math.max(0, this.shield - .015 * this.maxHealth / 23)
                }
                get ratio() {
                    return Math.max(0, this.health) / this.maxHealth
                }
                get shieldRatio() {
                    return Math.max(0, this.shield) / this.maxHealth
                }
                get isDead() {
                    return this.health <= 0
                }
            }
            class l {
                constructor(t, e) {
                    this.player = t,
                    this.index = e,
                    this.rarity = 0,
                    this.petals = [],
                    this.cooldowns = [],
                    this.boundMobs = [],
                    this.config = null,
                    this.amount = 1,
                    this.clumps = !1
                }
                get displayRatio() {
                    return 0 === this.amount || this.config.wearable ? 1 : this.petals.every((t => t && t.health.ratio > 0)) ? this.petals.reduce(( (t, e) => t + e.health.ratio), 0) / this.amount : Math.max(...this.cooldowns) / Math.max(1, this.config.cooldown)
                }
                define(t, e=0) {
                    this.config = t,
                    this.amount = this.config.tiers[e].count + (this.config.tiers[e].count > 1 ? Math.min(this.player.client.skills.skills.duplicator.level, 2) : 0) + (this.index === 0 && this.player.client.skills.skills.duplicator.level === 3 && this.rarity <= 7 ? 1 : 0) + (this.index === 0 && this.player.client.skills.skills.duplicator.level === 4 ? 1 : 0);
                    if (this.config.name === "Moon") {
                        const hasActiveMoon = this.player.petalSlots && this.player.petalSlots.some((t, i) => t.config.name === "Moon" && i !== this.index)
                        if (!hasActiveMoon) this.amount = 1;  
                        else this.amount = 0;
                        
                    }
                    this.clumps = this.config.tiers[e].clumps && this.amount > 1,
                    this.petals = new Array(this.amount).fill(null),
                    this.cooldowns = new Array(this.amount).fill(0),
                    this.boundMobs = new Array(this.amount).fill(null).map(( () => [])),
                    this.player.health.set(Math.max(1e-10, this.player.health.maxHealth + this.config.tiers[e].extraHealth)),
                    this.player.health.damageReduction += this.config.tiers[e].damageReduction,
                    this.player.size += this.config.tiers[e].extraSize,
                    this.player.speed *= this.config.tiers[e].speedMultiplier,
                    this.rarity = e,
                    this.config.wearable > 0 && (this.player.wearing[this.config.wearable] ??= 0,
                    this.player.wearing[this.config.wearable]++,
                    this.config.tiers[this.rarity].damageReflection?.reflection > 0 && 1 === this.player.wearing[this.config.wearable] && (this.player.damageReflection.reflection += this.config.tiers[this.rarity].damageReflection.reflection,
                    this.player.damageReflection.cap += this.config.tiers[this.rarity].damageReflection.cap)),
                    this.config.tiers[this.rarity].extraVision && (this.player.extraVision += this.config.tiers[this.rarity].extraVision),
                    this.config.tiers[this.rarity].absorbsDamage && this.player.absorbStacks.set(this.index, new d(this.config.tiers[this.rarity].absorbsDamage.maxDamage,this.config.tiers[this.rarity].absorbsDamage.period)),
                    this.config.attractsAggro && (this.player.aggroLevel += this.rarity),
                    this.player.client && (this.player.client.camera.lightingBoost += this.config.extraLighting)
                }
                destroy() {
                    if (this.petals.forEach((t => t?.destroy())),
                    this.player.health.set(this.player.health.maxHealth - this.config.tiers[this.rarity].extraHealth),
                    this.player.health.damageReduction -= this.config.tiers[this.rarity].damageReduction,
                    this.player.size -= this.config.tiers[this.rarity].extraSize,
                    this.player.speed /= this.config.tiers[this.rarity].speedMultiplier,
                    this.cooldowns = new Array(this.amount).fill(-100),
                    this.boundMobs.forEach((t => {
                        t.forEach((t => {
                            t.segmentBodies && t.segmentBodies.forEach((t => {
                                t.destroy()
                            }
                            )),
                            t.destroy()
                        }
                        ))
                    }
                    )),
                    this.config.wearable > 0 && (this.player.wearing[this.config.wearable]--,
                    this.config.tiers[this.rarity].damageReflection?.reflection > 0 && 0 === this.player.wearing[this.config.wearable] && (this.player.damageReflection.reflection -= this.config.tiers[this.rarity].damageReflection.reflection,
                    this.player.damageReflection.cap -= this.config.tiers[this.rarity].damageReflection.cap)),
                    this.config.tiers[this.rarity].extraVision && (this.player.extraVision -= this.config.tiers[this.rarity].extraVision),
                    this.config.tiers[this.rarity].absorbsDamage) {
                        let t = 0;
                        this.player.absorbStacks.forEach((e => {
                            e.stacks.forEach((e => {
                                t += e.damagePerTick * e.remainingTicks
                            }
                            ))
                        }
                        )),
                        this.player.health.damage(t),
                        this.player.absorbStacks.delete(this.index)
                    }
                    this.config.attractsAggro && (this.player.aggroLevel -= this.rarity),
                    this.player.client && (this.player.client.camera.lightingBoost -= this.config.extraLighting)
                }
                get radianSlots() {
                    return this.clumps ? 1 : this.amount
                }
                update(t, e, i) {
                    const moon = this.player.petalSlots
                    .flatMap(t => t.petals)
                    .find(p => p?.config?.name === "Moon");
                    const orbitCenterX = moon?.x ?? this.player.x;
                    const orbitCenterY = moon?.y ?? this.player.y;
                    let baseOrbitSize = moon?.config.tiers[moon.rarity]?.sizeRatio ?? this.player.size;
                    if (moon) baseOrbitSize *= 7;
                    let r = baseOrbitSize + 52.5 * (this.config.huddles ? .65 : i);
                    !0 === this.config.wingMovement && this.player.attack && (r += (1 + Math.sin(performance.now() / 125 + this.index)) * (4 * this.player.size));
                    for (let i = 0; i < this.amount; i++) {
                        const o = this.petals[i];
                        if (o) {
                            if (0 !== this.config.tiers[this.rarity].constantHeal && this.player.health.ratio <= this.config.healWhenUnder && this.player.health.ratio > 0 && (!this.config.healsInDefense || !this.player.attack && this.player.defend) && (this.player.health.health = Math.min(this.player.health.maxHealth, this.player.health.health + this.config.tiers[this.rarity].constantHeal)),
                            this.config.healSpit && (o.range--,
                            o.range <= 0 && (o.range = this.config.healSpit.cooldown,
                            h.A.spatialHash.retrieve({
                                _AABB: {
                                    x1: this.player.x - this.config.healSpit.range,
                                    y1: this.player.y - this.config.healSpit.range,
                                    x2: this.player.x + this.config.healSpit.range,
                                    y2: this.player.y + this.config.healSpit.range
                                }
                            }).forEach((t => {
                                t.parent.id !== this.player.id || t.type !== s.wv.PLAYER || t.health.ratio >= 1 || (t.health.health = Math.min(t.health.maxHealth, t.health.health + this.config.healSpit.heal * s.z.HEALTH_SCALE[this.rarity]))
                            }
                            )))),
                            this.config.tiers[this.rarity].pentagramAbility && (o.range--,
                            o.range <= 0)) {
                                const t = this.config.tiers[this.rarity].pentagramAbility;
                                o.range = t.cooldown;
                                const e = o.findTarget(t.range, !0);
                                e && new A(this.player,e,25 * Math.pow(this.rarity + 1, 1.15),1e3,this.rarity).define(t.damage, t.poison.damage, t.poison.duration, t.speedDebuff.multiplier, t.speedDebuff.duration)
                            }
                            if (this.config.shootsOut > -1 && (o.range -= 3,
                            o.range <= 0 && (this.player.attack || this.player.defend))) {
                                const t = new g(this.player,-1,-1);
                                t.x = o.x,
                                t.y = o.y,
                                t.index = this.config.shootsOut;
                                const e = n.GJ[this.config.shootsOut]
                                  , i = e.tiers[this.rarity];
                                t.rarity = this.rarity,
                                t.size = e.sizeRatio * Math.pow(1.3, this.rarity),
                                t.health.set(i.health),
                                t.damage = i.damage,
                                t.speed = 0,
                                t.spinSpeed = 0,
                                t.launched = !0,
                                t.range = 100,
                                t.nullCollision = !0,
                                t.ignoreWalls = e.ignoreWalls,
                                i.poison && (t.poison.toApply.damage = i.poison.damage,
                                t.poison.toApply.timer = i.poison.duration),
                                e.enemySpeedDebuff && (t.speedDebuff.toApply.multiplier = e.enemySpeedDebuff.speedMultiplier,
                                t.speedDebuff.toApply.timer = e.enemySpeedDebuff.duration);
                                const s = Math.atan2(o.y - this.player.y, o.x - this.player.x);
                                t.velocity.x = Math.cos(s) * (this.player.attack ? 25 : 5),
                                t.velocity.y = Math.sin(s) * (this.player.attack ? 25 : 5),
                                o.health.health = 0
                            }
                            if (this.config.tiers[this.rarity].healing) {
                                let t = [];
                                h.A.spatialHash.retrieve({
                                    _AABB: {
                                        x1: this.player.x - 150,
                                        y1: this.player.y - 150,
                                        x2: this.player.x + 150,
                                        y2: this.player.y + 150
                                    }
                                }).forEach((e => {
                                    e.type !== s.wv.MOB && e.type !== s.wv.PETAL && e.team === this.player.team && t.push(e)
                                }
                                ));
                                let e = null;
                                if (this.player.health.ratio < 1)
                                    e = this.player;
                                else {
                                    let i = t.filter((t => t !== this.player && t.health?.ratio < 1));
                                    i.length > 0 && (e = i.sort(( (t, e) => (0,
                                    a.t1)(o, t) - (0,
                                    a.t1)(o, e)))[0])
                                }
                                if (e) {
                                    if (o.range--,
                                    o.moveAngle = Math.atan2(e.y - o.y, e.x - o.x),
                                    o.range <= 0) {
                                        (0,
                                        a.t1)(o, e) < e.size && (e.health.health = Math.min(e.health.maxHealth, e.health.health + this.config.tiers[this.rarity].healing),
                                        o.destroy());
                                        continue
                                    }
                                } else
                                    o.range = 22.5
                            }
                            if (this.config.tiers[this.rarity].shield > 0) {
                                let t = [];
                                h.A.spatialHash.retrieve({
                                    _AABB: {
                                        x1: this.player.x - 150,
                                        y1: this.player.y - 150,
                                        x2: this.player.x + 150,
                                        y2: this.player.y + 150
                                    }
                                }).forEach((e => {
                                    e.type !== s.wv.MOB && e.type !== s.wv.PETAL && e.team === this.player.team && t.push(e)
                                }
                                ));
                                let e = null;
                                if (this.player.health.shieldRatio < .99)
                                    e = this.player;
                                else {
                                    let i = t.filter((t => t !== this.player && t.health?.shieldRatio < .95));
                                    i.length > 0 && (e = i.sort(( (t, e) => (0,
                                    a.t1)(o, t) - (0,
                                    a.t1)(o, e)))[0])
                                }
                                if (e) {
                                    if (o.range--,
                                    o.moveAngle = Math.atan2(e.y - o.y, e.x - o.x),
                                    o.moveStrength = Math.sqrt(Math.sqrt(Math.pow(e.y - o.y, 2) + Math.pow(e.x - o.x, 2))),
                                    o.range <= 0) {
                                        (0,
                                        a.t1)(o, e) < e.size && (e.health.shield = Math.min(e.health.maxHealth, e.health.shield + this.config.tiers[this.rarity].shield),
                                        o.destroy());
                                        continue
                                    }
                                } else
                                    o.range = 22.5
                            }
                            if (!o.launched) {
                                let s = 0
                                  , a = 0;
                                if (this.clumps) {
                                    const n = e / t * Math.PI * 2 + this.player.petalRotation
                                      , h = orbitCenterX + Math.cos(n) * r
                                      , l = orbitCenterY + Math.sin(n) * r
                                      , d = i / this.amount * Math.PI * 2 - this.player.petalRotation;
                                    let c = 2.5 * o.size;
                                    2 === this.config.wingMovement && (c *= 1 + 4 * Math.sin(performance.now() / 125 + 5 * o.id)),
                                    s = h + Math.cos(d) * c,
                                    a = l + Math.sin(d) * c
                                } else {
                                    const n = (e + i) / t * Math.PI * 2 + this.player.petalRotation;
                                    s = orbitCenterX + Math.cos(n) * r,
                                    a = orbitCenterY + Math.sin(n) * r
                                }
                                const n = s - o.x
                                  , h = a - o.y;
                                  if (this.config.name === "Moon") {
                                    const distanceX = this.player.x - o.x;
                                    const distanceY = this.player.y - o.y;
                                    const totalDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                                    if (totalDistance > 256) {
                                        o.moveStrength = 0.05;
                                        o.moveAngle = Math.atan2(distanceY, distanceX);
                                    } else {
                                        o.moveStrength = 0;
                                        o.moveAngle = 0;
                                    }
                                }
                                else if (this.config.name === "Wax") {
                                    
                                    o.moveStrength = 0;
                                    o.moveAngle = 0;
                                    o.spinSpeed = 0;
                                    
                                }
                                else 
                                o.moveStrength = Math.max(1, Math.cbrt(n * n + h * h) / o.speed),
                                o.moveAngle = Math.atan2(h, n) ?? 0;
                            }
                            if (this.config.launchable && !o.launched && (o.facing = (e + i) / t * Math.PI * 2 + this.player.petalRotation,
                            o.range -= 3,
                            (this.player.defend && 0 == this.config.launchedSpeed || this.player.attack) && o.range <= 0)) {
                                o.launched = !0,
                                o.speed *= this.config.launchedSpeed,
                                o.range = this.config.launchedRange;
                                const [t,e] = o.findTargetAngleWithinRadianArc(o.facing, 2 * Math.PI / (7.5 - .4 * this.rarity));
                                o.launchedAt = e,
                                o.moveAngle = t,
                                o.facing = o.moveAngle,
                                o.moveStrength = 1,
                                this.player.petalSlots[o.slotIndex].petals[o.petalIndex] = null,
                                o.slotIndex = -1,
                                o.petalIndex = -1
                            }
                            if (this.config.splits && (o.range -= 2,
                            o.range <= 0 && this.player.attack)) {
                                for (let t = 0; t < this.config.splits.count; t++) {
                                    const e = new g(this.player,-1,-1);
                                    e.rarity = this.rarity,
                                    e.index = this.config.splits.index,
                                    e.size = o.size / this.config.splits.count * 3,
                                    e.health.set(o.health.health),
                                    e.damage = o.damage,
                                    e.poison = o.poison,
                                    e.speed = .8 * o.speed,
                                    e.spinSpeed = o.spinSpeed,
                                    e.launched = !0,
                                    e.range = 100,
                                    e.facing = e.moveAngle = 2 * Math.PI / this.config.splits.count * t + o.facing + o.moveAngle,
                                    e.x = o.x,
                                    e.y = o.y
                                }
                                o.health.health = 0
                            }
                            if (!0 === this.config.wingMovement && (o.facing += .15),
                            this.config.tiers[this.rarity].spawnable && (o.range--,
                            o.range <= 0)) {
                                const t = new y(o);
                                t.parent = this.player,
                                t.team = this.player.team,
                                t.friendly = !0,
                                h.A.livingMobCount--,
                                t.define(n.ey[this.config.tiers[this.rarity].spawnable.index], this.config.tiers[this.rarity].spawnable.rarity);
                                if (t.config.name === "Beetle") t.health.maxHealth = 900 * Math.pow(3, this.rarity), t.health.health = t.health.maxHealth, t.damage = 5 * Math.pow(3, this.rarity);
                                if (t.config.name === "Soldier Ant") t.health.maxHealth = 250 * Math.pow(3, this.rarity), t.health.health = t.health.maxHealth, t.damage = 6 * Math.pow(3, this.rarity);
                                if (t.config.name === "Sandstorm") t.health.maxHealth = 30 * Math.pow(3, this.rarity), t.health.health = t.health.maxHealth, t.damage = 30 * Math.pow(3, this.rarity);
                                t.health.maxHealth *= Math.pow(1.15, this.player.client.skills?.skills.eggHP.level + (this.player.client.skills?.skills.eggHP.level === 9 ? 1 : 0)),
                                t.health.health *= Math.pow(1.15, this.player.client.skills?.skills.eggHP.level + (this.player.client.skills?.skills.eggHP.level === 9 ? 1 : 0)),
                                t.size *= 0.5,
                                this.boundMobs[i].push(t),
                                o.health.health = 0,
                                t.segmentBodies && t.segmentBodies.forEach((e => {
                                    e.size = t.size,
                                    e.health = t.health,
                                    e.damage = t.damage
                                }
                                ))
                            }
                        } else {
                            if (this.boundMobs[i].length > 0 && (this.boundMobs[i] = this.boundMobs[i].filter((t => t && !t.health.isDead)),
                            this.boundMobs[i].length > 0))
                                continue;
                            this.cooldowns[i]++,
                            this.cooldowns[i]>= this.config.cooldown * Math.pow(0.9, this.player.client.skills.skills.reload.level + (this.player.client.skills.skills.reload.level === 9 ? 1 : 0)) && (this.petals[i] = new g(this.player,this.index,i),
                            this.petals[i].define(this.config, this.rarity),
                            this.cooldowns[i] = 0)
                        }
                    }
                    return this.clumps ? e + 1 : e + this.amount
                }
                get gui() {
                    return {
                        index: this.config.id,
                        rarity: this.rarity,
                        alive: this.petals.some((t => t?.health.ratio > 0)),
                        cooldown: Math.min(...this.cooldowns) / this.config.cooldown
                    }
                }
            }
            class d {
                constructor(t=1024, e=96, i=8) {
                    this.maxDamage = t,
                    this.ticks = e,
                    this.maxStacks = i,
                    this.stacks = []
                }
                addStack(t) {
                    return !(this.stacks.length >= this.maxStacks || t <= 0 || t >= this.maxDamage) && (this.stacks.push({
                        damagePerTick: t / this.ticks,
                        remainingTicks: this.ticks
                    }),
                    !0)
                }
                tick() {
                    let t = 0;
                    for (let e = 0; e < this.stacks.length; e++)
                        t += this.stacks[e].damagePerTick,
                        --this.stacks[e].remainingTicks <= 0 && this.stacks.splice(e--, 1);
                    return t
                }
            }
            class c {
                static idAccumulator = 1;
                constructor(t={
                    x: 0,
                    y: 0
                }) {
                    this.id = c.idAccumulator++,
                    this.parent = this,
                    this.x = t.x,
                    this.y = t.y,
                    this.size = 20,
                    this.width = 1,
                    this.height = 1,
                    this.facing = 0,
                    this.speed = 4,
                    this.velocity = new r(0,0),
                    this.health = new o(10),
                    this.type = s.wv.STANDARD,
                    this.friction = .5,
                    this.damage = 5,
                    this.pushability = 1,
                    this.density = 1,
                    this.damageReflection = {
                        reflection: 0,
                        cap: 0
                    },
                    this.healBack = 0,
                    this.aggroLevel = 0,
                    this.canBeViewed = !0,
                    this.nullCollision = !1,
                    this.hit = 0,
                    this.collisionIDs = new Set,
                    this.damagedBy = {},
                    this.speedDebuff = {
                        multiplier: 1,
                        timer: 0,
                        toApply: {
                            multiplier: 1,
                            timer: 0
                        }
                    },
                    this.poison = {
                        damage: 0,
                        timer: 0,
                        toApply: {
                            damage: 0,
                            timer: 0
                        }
                    },
                    this.absorbStacks = new Map,
                    this.lastGoodPosition = {
                        x: this.x,
                        y: this.y
                    },
                    this.guns = [],
                    h.A.entities.set(this.id, this)
                }
                bindToRoom() {
                    if (h.A.isRadial) {
                        const t = Math.atan2(this.y, this.x)
                          , e = this.x * this.x + this.y * this.y
                          , i = h.A.width / 2;
                        if (e > i * i) {
                            const e = Math.sqrt(i * i - 1);
                            this.x = Math.cos(t) * e,
                            this.y = Math.sin(t) * e
                        }
                    } else
                        this.x = Math.max(-h.A.width / 2, Math.min(h.A.width / 2, this.x)),
                        this.y = Math.max(-h.A.height / 2, Math.min(h.A.height / 2, this.y))
                }
                findTarget(t, e=!1) {
                    const i = h.A.spatialHash.retrieve({
                        _AABB: {
                            x1: this.x - t,
                            y1: this.y - t,
                            x2: this.x + t,
                            y2: this.y + t
                        }
                    });
                    if (e) {
                        const t = [];
                        return i.forEach((e => {
                            e.parent.id !== this.parent.id && e.parent.team !== this.parent.team && e.type !== s.wv.PETAL && t.push(e)
                        }
                        )),
                        t[Math.floor(Math.random() * t.length)]
                    }
                    {
                        const t = [];
                        return i.forEach((e => {
                            e.parent.id !== this.parent.id && e.parent.team !== this.parent.team && e.type !== s.wv.PETAL && t.push(e)
                        }
                        )),
                        t.sort(( (t, e) => (0,
                        a.t1)(this, t) - (0,
                        a.t1)(this, e))).sort(( (t, e) => e.parent.aggroLevel - t.parent.aggroLevel))[0] || null
                    }
                }
                update() {
                    if (this.health.isDead)
                        this.destroy();
                    else {
                        if (this.poison.timer > 0 && (this.health.damage(this.poison.damage),
                        this.poison.timer--),
                        this.absorbStacks.size > 0) {
                            let t = 0;
                            this.absorbStacks.forEach((e => {
                                t += e.tick()
                            }
                            )),
                            this.health.damage(t)
                        }
                        this.speedDebuff.timer > 0 && (this.velocity.multiply(this.speedDebuff.multiplier),
                        this.speedDebuff.timer--),
                        this.x += this.velocity.x,
                        this.y += this.velocity.y,
                        this.speedDebuff.timer > 0 && this.velocity.divide(this.speedDebuff.multiplier),
                        this.velocity.multiply(this.friction),
                        this._AABB = h.A.spatialHash.getAABB(this),
                        this.canBeViewed && h.A.viewsSpatialHash.insert(this),
                        h.A.spatialHash.insert(this),
                        this.collisionIDs.clear(),
                        this.hit = Math.max(0, this.hit - 1),
                        this.dandelionCooldown > 0 && this.dandelionCooldown--
                    }
                }
                collide() {
                    h.A.spatialHash.retrieve(this).forEach((t => {
                        if (this.id === t.id || this.parent.id === t.parent.id && this.type !== t.type)
                            return;
                
                        const isPetalVsMob = (this.type === s.wv.PETAL && t.type === s.wv.MOB) || 
                                             (this.type === s.wv.MOB && t.type === s.wv.PETAL);
                

                        if (!isPetalVsMob) {
                            if (this.collisionIDs.has(t.id) || t.collisionIDs.has(this.id))
                                return;
                            
                            this.collisionIDs.add(t.id);
                            t.collisionIDs.add(this.id);
                        }
                
                        if (this.parent.team === t.parent.team && (this.type === s.wv.PETAL || t.type === s.wv.PETAL || this.type === s.wv.PLAYER && t.type === s.wv.MOB || t.type === s.wv.PLAYER && this.type === s.wv.MOB))
                            return;
                        if (this.type === s.wv.MOB && t.type === s.wv.MOB && this.team === t.team && this.segmentID > -1 && t.segmentID > -1 && this.segmentID === t.segmentID)
                            return;
                
                        const e = this.x - t.x,
                              i = this.y - t.y,
                              a = e * e + i * i;
                
                        if (!(0 === a || this.size + t.size < Math.sqrt(a))) {
                            if (this.parent.team !== t.parent.team && !this.spawnInvincibility && !t.spawnInvincibility) {
                                if (!this.nullCollision && !t.nullCollision) {
                                    
                                    const iterations = isPetalVsMob ? 10 : 1;
                
                                    for (let step = 0; step < iterations; step++) {
                                        if (this.health?.health <= 0 || t.health?.health <= 0) break;
                
                                        let damageToT = 0,     
                                            damageToThis = 0;  
                
                                        if (isPetalVsMob) {
                                            if (this.type === s.wv.PETAL && t.type === s.wv.MOB) {
                                                const petalRatio = this.health.health / this.health.maxHealth;
                                                damageToT = (petalRatio ?? 0) * this.damage;
                                                damageToThis = t.damage;
                                            } else if (this.type === s.wv.MOB && t.type === s.wv.PETAL) {
                                                const petalRatio = t.health.health / t.health.maxHealth;
                                                damageToT = this.damage;
                                                damageToThis = (petalRatio ?? 0) * t.damage;
                                            }
                                        } else {
                                            damageToT = this.damage;
                                            damageToThis = t.damage;
                                        }
                
                                        damageToT -= t.armor;
                                        damageToThis -= this.armor;
                
                                        if (this.type === s.wv.PETAL && this.parent?.type === s.wv.PLAYER) {
                                            let t = this.velocity.magnitude;
                                            if (t > 4.5) {
                                                let e = 1 - Math.exp(.008 * -(t - 4.5));
                                                e = Math.min(e, .2351),
                                                Math.random() < e && (damageToT *= 1.45)
                                            }
                                        }
                                        if (t.type === s.wv.PETAL && t.parent?.type === s.wv.PLAYER) {
                                            let i = t.velocity.magnitude;
                                            if (i > 4.5) {
                                                let t = 1 - Math.exp(.008 * -(i - 4.5));
                                                t = Math.min(t, .2351),
                                                Math.random() < t && (damageToThis *= 1.45)
                                            }
                                        }
                
                                        if (this.absorbStacks.size > 0) {
                                            let t = !1;
                                            this.absorbStacks.forEach((i => {
                                                !t && i.addStack(damageToThis) && (t = !0)
                                            }));
                                            t || this.health.damage(damageToThis)
                                        } else
                                            this.health.damage(damageToThis);
                
                                        if (t.absorbStacks.size > 0) {
                                            let e = !1;
                                            t.absorbStacks.forEach((t => {
                                                !e && t.addStack(damageToT) && (e = !0)
                                            }));
                                            e || t.health.damage(damageToT)
                                        } else
                                            t.health.damage(damageToT);
                
                                        if ("Starfish" === this.config?.name && this.type === s.wv.MOB && "Dandelion" === t.config?.name && (this.dandelionCooldown = 1 + .5 * t.rarity),
                                        this.damageReflection?.reflection > 0 && !t.parent.spawnInvincibility && (this.damageReflection.cap > 0 ? t.parent.health.damage(Math.min(t.parent.health.maxHealth * this.damageReflection.cap, this.damageReflection.reflection * damageToThis)) : t.parent.health.damage(this.damageReflection.reflection * damageToThis)),
                                        t.damageReflection?.reflection > 0 && !this.parent.spawnInvincibility && (t.damageReflection.cap > 0 ? this.parent.health.damage(Math.min(this.parent.health.maxHealth * t.damageReflection.cap, t.damageReflection.reflection * damageToT)) : this.parent.health.damage(t.damageReflection.reflection * damageToT)),
                                        0 !== this.healBack && (this.parent.health.health = Math.min(this.parent.health.maxHealth, this.parent.health.health + this.healBack * damageToT)),
                                        0 !== t.healBack && (t.parent.health.health = Math.min(t.parent.health.maxHealth, t.parent.health.health + t.healBack * damageToThis)),
                                        Number.isFinite(this.health?.health) && Number.isFinite(t.health?.health) && (this.hit = 3, t.hit = 3),
                                        this.type === s.wv.MOB && this.neutral && (this.target = t.parent),
                                        t.type === s.wv.MOB && t.neutral && (t.target = this.parent),
                                        this.type === s.wv.PLAYER || this.type === s.wv.MOB)
                                            if (this.parent && "Leech" === this.config?.name) {
                                                let e = this.parent.damagedBy[t.parent.id] || [0, t.parent.type, t.parent.type === s.wv.PLAYER ? t.parent.name : t.parent.index, t.parent.type === s.wv.PLAYER && t.parent.client ? t.parent.client.id : null];
                                                e[0] += t.damage, this.parent.damagedBy[t.parent.id] = e
                                            } else {
                                                let e = this.damagedBy[t.parent.id] || [0, t.parent.type, t.parent.type === s.wv.PLAYER ? t.parent.name : t.parent.index, t.parent.type === s.wv.PLAYER && t.parent.client ? t.parent.client.id : null];
                                                e[0] += t.damage, this.damagedBy[t.parent.id] = e
                                            }
                                        if (t.type === s.wv.PLAYER || t.type === s.wv.MOB)
                                            if (t.parent && "Leech" === t.config?.name) {
                                                let e = t.parent.damagedBy[this.parent.id] || [0, this.parent.type, this.parent.type === s.wv.PLAYER ? this.parent.name : this.parent.index, this.parent.type === s.wv.PLAYER && this.parent.client ? this.parent.client.id : null];
                                                e[0] += this.damage, t.parent.damagedBy[this.parent.id] = e
                                            } else {
                                                let e = t.damagedBy[this.parent.id] || [0, this.parent.type, this.parent.type === s.wv.PLAYER ? this.parent.name : this.parent.index, this.parent.type === s.wv.PLAYER && this.parent.client ? this.parent.client.id : null];
                                                e[0] += this.damage, t.damagedBy[this.parent.id] = e
                                            }
                                        
                                        this.type === s.wv.PLAYER && this.petalSlots.forEach((t => { t.petals.forEach((t => { t?.lightning?.lightningOnParentHit && (new w(this).define(t.lightning.damage, t.lightning.range, t.lightning.bounces, t.rarity).bounce(), t.lightning.chargesLeft--, t.health.health = t.health.maxHealth / t.lightning.charges * t.lightning.chargesLeft) })) }));
                                        this.type === s.wv.PETAL && null !== this.lightning && this.lightning.chargesLeft > 0 && !this.lightning.lightningOnParentHit && (new w(this.parent).define(this.lightning.damage, this.lightning.range, this.lightning.bounces).bounce(), this.lightning.charges > 1 && (this.lightning.chargesLeft--, this.health.health = this.health.maxHealth / this.lightning.charges * this.lightning.chargesLeft));
                                        t.type === s.wv.PLAYER && t.petalSlots.forEach((e => { e.petals.forEach((e => { e?.lightning?.lightningOnParentHit && (new w(t).define(e.lightning.damage, e.lightning.range, e.lightning.bounces, e.rarity).bounce(), e.lightning.chargesLeft--, e.health.health = e.health.maxHealth / e.lightning.charges * e.lightning.chargesLeft) })) }));
                                        t.type === s.wv.PETAL && null !== t.lightning && t.lightning.chargesLeft > 0 && !t.lightning.lightningOnParentHit && (new w(t.parent).define(t.lightning.damage, t.lightning.range, t.lightning.bounces).bounce(), t.lightning.charges > 1 && (t.lightning.chargesLeft--, t.health.health = t.health.maxHealth / t.lightning.charges * t.lightning.chargesLeft));
                                    }
                                }
                                
                                this.speedDebuff.toApply.timer > 0 && (t.speedDebuff.multiplier = this.speedDebuff.toApply.multiplier, t.speedDebuff.timer = this.speedDebuff.toApply.timer);
                                t.speedDebuff.toApply.timer > 0 && (this.speedDebuff.multiplier = t.speedDebuff.toApply.multiplier, this.speedDebuff.timer = t.speedDebuff.toApply.timer);
                                this.poison.toApply.timer > 0 && (t.poison.damage = this.poison.toApply.damage, t.poison.timer = this.poison.toApply.timer);
                                t.poison.toApply.timer > 0 && (this.poison.damage = t.poison.toApply.damage, this.poison.timer = t.poison.toApply.timer);
                            }
                
                            if (!(this.nullCollision || t.nullCollision || this.phases || t.phases)) {
                                const s = Math.atan2(i, e),
                                      n = this.size + t.size,
                                      h = n - Math.sqrt(a),
                                      r = this.size / n,
                                      o = t.size / n;
                                this.velocity.x += Math.cos(s) * h * this.pushability * t.density * o,
                                this.velocity.y += Math.sin(s) * h * this.pushability * t.density * o,
                                t.velocity.x -= Math.cos(s) * h * t.pushability * this.density * r,
                                t.velocity.y -= Math.sin(s) * h * t.pushability * this.density * r
                            }
                        }
                    }));
                }
                collideTerrain() {
                    const t = h.A.terrainSpatialHash.retrieve(this)
                      , e = [];
                    if (t.forEach((t => {
                        if (t.polygon.circleIntersects(this.x, this.y, this.size)) {
                            const i = t.polygon.resolve(this.x, this.y, this.size);
                            this.x = i.x,
                            this.y = i.y,
                            this.config?.bumblebeeMovement && (this.movementAngle = Math.random() * Math.PI * 2),
                            e.push(t)
                        }
                    }
                    )),
                    e.length > 0 ? this.velocity.multiply(.5) : this.lastGoodPosition = {
                        x: this.x,
                        y: this.y
                    },
                    2 === e.length) {
                        const t = Math.abs(e[0].gridX - e[1].gridX)
                          , i = Math.abs(e[0].gridY - e[1].gridY);
                        if (t === i || t > 1 || i > 1)
                            return;
                        const s = {
                            x: 0,
                            y: 0,
                            size: 0
                        };
                        for (const t of e)
                            s.x += t.x,
                            s.y += t.y,
                            s.size += t.size;
                        s.x /= e.length,
                        s.y /= e.length,
                        s.size /= e.length;
                        const a = this.x - s.x
                          , n = this.y - s.y;
                        if (Math.sqrt(a * a + n * n) < this.size)
                            return;
                        const h = Math.atan2(this.y - s.y, this.x - s.x);
                        this.x = s.x + Math.cos(h) * (s.size + this.size + 3),
                        this.y = s.y + Math.sin(h) * (s.size + this.size + 3)
                    }
                    let i = this.x > -h.A.width / 2 && this.x < h.A.width / 2 && this.y > -h.A.height / 2 && this.y < h.A.height / 2;
                    i && (this._AABB = h.A.spatialHash.getAABB(this),
                    h.A.terrainSpatialHash.retrieve(this).forEach((t => {
                        i && t.polygon.circleIntersects(this.x, this.y, this.size) && (i = !1)
                    }
                    ))),
                    i || (this.x = this.lastGoodPosition.x,
                    this.y = this.lastGoodPosition.y)
                }
                getTopDamagers(t=3, e=-1) {
                    const i = [];
                    for (const t in this.damagedBy) {
                        const [a,h,r,o] = this.damagedBy[t];
                        -1 !== e && h !== e || (h !== s.wv.PLAYER || i.some((t => t.clientID === o)) || i.push({
                            id: +t,
                            type: h,
                            damage: a,
                            name: r,
                            clientID: o
                        }),
                        h === s.wv.MOB && i.push({
                            id: +t,
                            type: h,
                            damage: a,
                            name: n.ey[r].name
                        }))
                    }
                    return i.sort(( (t, e) => e.damage - t.damage)),
                    i.slice(0, t)
                }
                destroy() {
                    this.health.health = 0,
                    h.A.entities.delete(this.id),
                    h.A.isWaves && (h.A.aliveMobs = h.A.aliveMobs.filter((t => t.id !== this.id)))
                }
            }
            class g extends c {
                constructor(t, e, i) {
                    super(t),
                    this.parent = t,
                    this.slotIndex = e,
                    this.petalIndex = i,
                    this.moveAngle = 0,
                    this.moveDist = 1,
                    this.speed = 6,
                    this.size = 7.5,
                    this.health.set(10),
                    this.type = s.wv.PETAL,
                    this.friction = .7,
                    this.index = 0,
                    this.spinSpeed = .1,
                    this.launched = !1,
                    this.range = 33.75,
                    this.moveStrength = 1,
                    this.launchedAt = null,
                    this.attractsLightning = !1,
                    this.placeDown = !1,
                    this.rarity = 0,
                    this.armor = 0,
                    this.lightning = null,
                    this.burst = !1,
                    this.faceInRelation = !1,
                    this.ignoreWalls = !1
                }
                define(t, e) {
                    const i = t.tiers[e];
                    this.rarity = e,
                    this.health.set(i.health * Math.pow(1.15, this.parent?.client? this.parent.client.skills.skills.petalHP.level + + (this.parent.client.skills.skills.petalHP.level === 9 ? 1 : 0): 0)),
                    this.damage = i.damage,
                    this.config = t,
                    this.size *= i.sizeRatio,
                    this.index = t.id,
                    this.spinSpeed = t.launchable ? 0 : (this.config.name === "Moon" ? .01 : .1),
                    this.armor = 0,
                    t.enemySpeedDebuff && (this.speedDebuff.toApply.multiplier = t.enemySpeedDebuff.speedMultiplier,
                    this.speedDebuff.toApply.timer = t.enemySpeedDebuff.duration),
                    i.poison && (this.poison.toApply.damage = i.poison.damage,
                    this.poison.toApply.timer = i.poison.duration),
                    i.spawnable && (this.range = i.spawnable.timer,
                    this.spinSpeed = 0),
                    i.lightning && (this.lightning = i.lightning,
                    this.lightning.chargesLeft = i.lightning.charges),
                    t.canPlaceDown && (this.placeDown = !0),
                    i.density && (this.density = i.density),
                    t.phases && (this.health.invulnerable = !0,
                    this.phases = !0),
                    this.attractsLightning = t.attractsLightning,
                    i.boost && (this.burst = {
                        speed: i.boost.length,
                        ticks: i.boost.delay
                    }),
                    t.healWhenUnder < 1 && (this.spinSpeed = 0),
                    "Starfish" === t.name && (this.faceInRelation = 0),
                    i.healBack && (this.healBack = i.healBack),
                    t.extraDamage && (this.extraDamage = t.extraDamage),
                    0 !== i.armor && (this.armor = i.armor),
                    !t.wearable && i.damageReflection?.reflection > 0 && (this.damageReflection = {
                        reflection: i.damageReflection.reflection,
                        cap: i.damageReflection.cap
                    }),
                    this.ignoreWalls = t.ignoreWalls;
                    const moon = this.parent.petalSlots
                            .flatMap(t => t.petals)
                            .find(p => p?.config?.name === "Moon");
                    if (moon) {
                        this.x = moon.x, this.y = moon.y
                    }
                }
                findTargetAngleWithinRadianArc(t, e) {
                    let i = t
                      , n = 1 / 0
                      , r = null;
                    return h.A.entities.forEach((h => {
                        if (h.parent.id === this.parent.id || h.parent.team === this.parent.team || h.type === s.wv.PETAL)
                            return;
                        const o = Math.atan2(h.y - this.y, h.x - this.x);
                        if (Math.abs((0,
                        a.FL)(t, o)) > e / 2)
                            return;
                        const l = this.x - h.x
                          , d = this.y - h.y
                          , c = l * l + d * d;
                        c < n && (i = o,
                        n = c,
                        r = h)
                    }
                    )),
                    [i, r]
                }
                update() {
                    
                    if (this.dandelionBind)
                        return this.x = this.dandelionBind.x + Math.cos(this.facing) * (this.size + 1.2 * this.dandelionBind.size),
                        this.y = this.dandelionBind.y + Math.sin(this.facing) * (this.size + 1.2 * this.dandelionBind.size),
                        super.update();
                    if (!1 !== this.burst && (this.burst.ticks--,
                    this.parent.type === s.wv.PLAYER && this.parent.defend && this.burst.ticks <= 0)) {
                        const moon = this.parent.petalSlots
                            .flatMap(t => t.petals)
                            .find(p => p?.config?.name === "Moon");
                        const xvalue = (moon?.x ??this.parent.x);
                        const yvalue = (moon?.y ?? this.parent.y);
                        const t = Math.atan2(yvalue - this.y, xvalue - this.x)
                          , e = this.burst.speed / this.parent.friction;
                        if (moon) {return moon.velocity.x += Math.cos(t) * (e / 4),
                            moon.velocity.y += Math.sin(t) * (e / 4),
                        void this.destroy()}
                        else {
                        return this.parent.velocity.x += Math.cos(t) * e,
                        this.parent.velocity.y += Math.sin(t) * e,
                        void this.destroy()}
                    }
                    if (this.launched && null !== this.launchedAt && !this.launchedAt.health.isDead && (this.moveAngle = (0,
                    a.nU)(this.moveAngle, Math.atan2(this.launchedAt.y - this.y, this.launchedAt.x - this.x), .35),
                    this.facing = this.moveAngle),
                    this.placeDown && this.parent.attack)
                        return super.update();
                    this.velocity.x += Math.cos(this.moveAngle) * this.speed * this.moveStrength,
                    this.velocity.y += Math.sin(this.moveAngle) * this.speed * this.moveStrength,
                    this.facing += this.spinSpeed,
                    !1 !== this.faceInRelation && (this.facing = Math.atan2(this.y - this.parent.y, this.x - this.parent.x) + this.faceInRelation),
                    this.launched && (this.range--,
                    this.range <= 0) ? this.destroy() : super.update()
                }
                collide() {
                    if (this.config?.name && (this.config?.name === "Moon" || this.config?.name === "Wax")) {
                        const t = h.A.terrainSpatialHash.retrieve(this), e = [];
                        t.forEach((t => {
                            if (t.polygon.circleIntersects(this.x, this.y, this.size)) {
                                const i = t.polygon.resolve(this.x, this.y, this.size);
                                this.x = i.x,
                                this.y = i.y,
                                e.push(t)
                            }
                        }));
                        e.length > 0 ? this.velocity.multiply(.5) : this.lastGoodPosition = {
                            x: this.x,
                            y: this.y
                        };
                        if (2 === e.length) {
                            const t = Math.abs(e[0].gridX - e[1].gridX), i = Math.abs(e[0].gridY - e[1].gridY);
                            if (!(t === i || t > 1 || i > 1)) {
                                const s = { x: 0, y: 0, size: 0 };
                                for (const t of e) s.x += t.x, s.y += t.y, s.size += t.size;
                                s.x /= e.length, s.y /= e.length, s.size /= e.length;
                                const a = this.x - s.x, n = this.y - s.y;
                                if (!(Math.sqrt(a * a + n * n) < this.size)) {
                                    const h = Math.atan2(this.y - s.y, this.x - s.x);
                                    this.x = s.x + Math.cos(h) * (s.size + this.size + 3),
                                    this.y = s.y + Math.sin(h) * (s.size + this.size + 3)
                                }
                            }
                        }
                        let i = this.x > -h.A.width / 2 && this.x < h.A.width / 2 && this.y > -h.A.height / 2 && this.y < h.A.height / 2;
                        i && (this._AABB = h.A.spatialHash.getAABB(this),
                        h.A.terrainSpatialHash.retrieve(this).forEach((t => {
                            i && t.polygon.circleIntersects(this.x, this.y, this.size) && (i = !1)
                        })));
                        i || (this.x = this.lastGoodPosition.x, this.y = this.lastGoodPosition.y);
                    }
                    if (this.launched && !1 === this.ignoreWalls) {
                        h.A.terrainSpatialHash.retrieve(this).forEach((t => {
                            t.polygon.circleIntersects(this.x, this.y, this.size) && this.destroy()
                        }
                        ))
                    }
                    super.collide()
                }
                destroy() {
                    this.slotIndex > -1 && (this.parent.petalSlots[this.slotIndex].petals[this.petalIndex] = null),
                    super.destroy()
                }
            }
            class p extends c {
                constructor(t={
                    x: 0,
                    y: 0
                }) {
                    super(t),
                    this.name = "guest",
                    this.nameColor = "#FFFFFF",
                    this.type = s.wv.PLAYER,
                    this.team = this.id,
                    this.health.set(40),
                    this.moveAngle = 0,
                    this.moveStrength = 0,
                    this.attack = !1,
                    this.defend = !1,
                    this.petalRotation = 0,
                    this.size = 17,
                    this.extraPickupRange = 0,
                    this.armor = 0,
                    this.petalSlots = [],
                    this.initSlots(5),
                    this.client = null,
                    this.wearing = [],
                    this.extraVision = 0,
                    this.lightVision = 2
                }
                get level() {
                    return this.client ? this.client.level : 1
                }
                get rarity() {
                    if (this.client)
                        return this.client.highestRarity;
                    let t = 0;
                    return this.petalSlots.forEach((e => {
                        t = Math.max(t, e.rarity)
                    }
                    )),
                    t
                }
                initSlots(t) {
                    const nameRaritys = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Ultra", "Super", "Unique", "Eternal"];
                    if (t > this.petalSlots.length) {
                        for (let e = this.petalSlots.length; e < t; e++) {
                            if (this.client?.slots[e] !== undefined && this.client?.slots[e] !== null) {
                                const t = new l(this, e);
                                t.define(n.GJ[0], 0);
                                this.petalSlots.push(t);
                            }
                        }
                    } else {
                        for (let e = this.petalSlots.length - 1; e >= t; e--) {
                            const activeSlot = this.petalSlots[e];
                            if (activeSlot && activeSlot.config) {
                                const petalId = activeSlot.config.id;
                                const petalRarity = activeSlot.rarity;
                                const rarityName = nameRaritys[petalRarity];
                                
                                if (this.client && this.client.inventory && rarityName) {
                                    if (!this.client.inventory[rarityName]) {
                                        this.client.inventory[rarityName] = {};
                                    }
                                    if (!this.client.inventory[rarityName][petalId]) {
                                        this.client.inventory[rarityName][petalId] = 0;
                                    }
                                    this.client.inventory[rarityName][petalId] += 1;
                                }
                            }
                            this.petalSlots[e].destroy();
                            this.petalSlots.pop();
                        }
                    }
                }
                setSlot(t, e, i) {
                    this.petalSlots[t] && (this.petalSlots[t].destroy(),
                    this.petalSlots[t].define(n.GJ[e], i))
                }
                update() {
                    if (this.health.isDead)
                        for (const t of this.petalSlots)
                            if (t.config.tiers[t.rarity].deathDefying?.duration > 0 && t.petals.some((t => t && !t.health.isDead))) {
                                this.health.health = Math.min(t.config.tiers[t.rarity].deathDefying.health * this.health.maxHealth, this.health.maxHealth),
                                t.petals.forEach((t => t?.destroy())),
                                this.health.invulnerable || (this.health.invulnerable = !0,
                                setTimeout(( () => this.health.invulnerable = !1), 1e3 * t.config.tiers[t.rarity].deathDefying.duration));
                                break
                            }
                    this.health.shield > 0 && this.health.deteriorateShield(),
                    this.velocity.x += Math.cos(this.moveAngle) * this.moveStrength,
                    this.velocity.y += Math.sin(this.moveAngle) * this.moveStrength,
                    this.bindToRoom(),
                    this.facing = this.moveAngle,
                    super.update(),
                    this.health.lastDamaged + 15e3 < Date.now() && (this.health.health = Math.min(this.health.maxHealth, this.health.health + .0025 * this.health.maxHealth))
                }
                collide() {
                    super.collide(),
                    this.collideTerrain();
                    let t = 0
                      , e = 0
                      , i = 0;
                    const s = this.petalSlots.reduce(( (t, s) => (s.config.yinYangMovement && e++,
                    s.config.tiers[s.rarity].extraRange > i && (i = s.config.tiers[s.rarity].extraRange),
                    t + s.radianSlots)), 0);
                    let a = 1;
                    a = e % 3 == 0 ? 1 : e % 3 == 1 ? -1 : 0,
                    this.petalRotation += .125 * a,
                    this.extraPickupRange = 0;
                    const n = (1 + .5 * this.attack - .4 * this.defend) * (1 + i * this.attack);
                    this.petalSlots.forEach((e => {
                        t = e.update(s, t, n),
                        e.config.tiers[e.rarity].extraRadians && (this.petalRotation += e.config.tiers[e.rarity].extraRadians * a),
                        this.extraPickupRange = Math.max(this.extraPickupRange, e.config.tiers[e.rarity].extraPickupRange)
                    }
                    ))
                }
                destroy() {
                    if (this.petalSlots.forEach((t => t.destroy())),
                    super.destroy(),
                    null !== this.client) {
                        const t = this.getTopDamagers(10)
                          , e = []
                          , i = {}
                          , n = this.petalSlots.reduce(( (t, e) => t + Math.pow(e.rarity + 1, 3)), 0);
                        t.forEach((t => {
                            if (t.type === s.wv.PLAYER && (e.push(t.name),
                            null !== t.clientID)) {
                                const e = h.A.clients.get(t.clientID);
                                e && e.addXP(n)
                            }
                            t.type === s.wv.MOB && (i[t.name] = (i[t.name] || 0) + 1)
                        }
                        ));
                        const r = [...e, ...Object.entries(i).map(( ([t,e]) => (1 === e ? "a" : e) + " " + (e > 1 ? (0,
                        a.TH)(t) : t)))];
                        let o = "You were killed by ";
                        r.length > 0 ? o += r.slice(0, -1).join(", ") + (r.length > 1 ? " and " : "") + r[r.length - 1] : o += '"the game"',
                        this.client.talk(s.de.DEATH, o),
                        this.client.body = null,
                        h.A.alivePlayers = h.A.alivePlayers.filter((t => t.id !== this.client.id))
                    }
                }
            }
            class m {
                constructor(t) {
                    this.id = t,
                    this.body = null,
                    this.camera = {
                        lightingBoost: 1
                    },
                    this.level = 1,
                    this.xp = 1,
                    this.slots = new Array(5).fill(null).map(( () => ({
                        id: 0,
                        rarity: 2
                    }))),
                    this.secondarySlots = new Array(5).fill(null).map(( () => null))
                }
                talk() {}
                addXP(t) {
                    if (!Number.isFinite(t))
                        return;
                    for (this.xp += t; this.xp < (0,
                    a.UU)(this.level - 1); )
                        this.level--,
                        this.body && !this.body.health.isDead && (this.body.health.set(this.healthAdjustement + this.body.petalSlots.reduce(( (t, e) => t + e.config.tiers[e.rarity].extraHealth), 0)),
                        this.body.damage = this.bodyDamageAdjustment);
                    for (; this.xp >= (0,
                    a.UU)(this.level); )
                        this.level++,
                        this.skills.skillpoints += 2,
                        this.body && !this.body.health.isDead && (this.body.health.set(this.healthAdjustement + this.body.petalSlots.reduce(( (t, e) => t + e.config.tiers[e.rarity].extraHealth), 0)),
                        this.body.damage = this.bodyDamageAdjustment);
                    let e = 5 + Math.min(5, Math.floor(this.level / 10));
                    if (e !== this.slots.length)
                        if (e > this.slots.length)
                            for (let t = this.slots.length; t < e; t++)
                                this.slots.push({
                                    id: 0,
                                    rarity: 0
                                }),
                                this.secondarySlots.push(null);
                        else if (e < this.slots.length)
                            for (let t = this.slots.length - 1; t >= e; t--)
                                this.slots.pop(),
                                this.secondarySlots.pop();
                    this.body && !this.body.health.isDead && this.body.initSlots(e)
                }
                get healthAdjustement() {
                    return 40 + 5 * Math.pow(this.level, 1.5)
                }
                get bodyDamageAdjustment() {
                    return 5 + 1 * Math.pow(this.level, 1.5)
                }
                get highestRarity() {
                    let t = 0;
                    for (const e of this.slots)
                        e.rarity > t && (t = e.rarity);
                    for (const e of this.secondarySlots)
                        e && e.rarity > t && (t = e.rarity);
                    return t
                }
            }
            class u extends p {
                static names = ["Abe", "Abraham", "Adam", "Adrian", "Al", "Alan", "Albert", "Alex", "Alexander", "Alfred", "Allan", "Allen", "Alvin", "Andre", "Andrew", "Andy", "Anthony", "Antonio", "Archie", "Arnold", "Arthur", "Austin", "Barry", "Ben", "Benjamin", "Bernard", "Bill", "Billy", "Bob", "Bobby", "Brad", "Bradley", "Brandon", "Brent", "Brett", "Brian", "Bruce", "Bryan", "Calvin", "Carl", "Cary", "Casey", "Cecil", "Chad", "Charles", "Charlie", "Chester", "Chris", "Christian", "Christopher", "Chuck", "Clarence", "Clifford", "Clint", "Clyde", "Cody", "Colin", "Corey", "Craig", "Curtis", "Dale", "Dan", "Daniel", "Danny", "Darrell", "Darren", "Dave", "David", "Dean", "Dennis", "Derek", "Derrick", "Don", "Donald", "Doug", "Douglas", "Duane", "Dustin", "Dwayne", "Dwight", "Dylan", "Earl", "Ed", "Eddie", "Edgar", "Edward", "Edwin", "Eli", "Eric", "Ernest", "Eugene", "Evan", "Floyd", "Francis", "Frank", "Franklin", "Fred", "Freddie", "Gabriel", "Garry", "Gary", "Gene", "Geoffrey", "George", "Gerald", "Gilbert", "Glen", "Glenn", "Gordon", "Greg", "Gregory", "Guy", "Harold", "Harry", "Harvey", "Henry", "Herbert", "Homer", "Horace", "Howard", "Hugh", "Ian", "Ira", "Isaac", "Jack", "Jacob", "Jake", "James", "Jamie", "Jason", "Jay", "Jeff", "Jeffery", "Jeffrey", "Jeremiah", "Jeremy", "Jerome", "Jerry", "Jesse", "Jim", "Jimmy", "Joe", "Joel", "John", "Johnny", "Jon", "Jonathan", "Jordan", "Jose", "Joseph", "Josh", "Joshua", "Juan", "Julian", "Justin", "Karl", "Keith", "Ken", "Kenneth", "Kenny", "Kent", "Kevin", "Kirk", "Kurt", "Kyle", "Lance", "Larry", "Lawrence", "Lee", "Leo", "Leon", "Leonard", "Leroy", "Leslie", "Lewis", "Lloyd", "Lonnie", "Louis", "Lucas", "Luther", "Marc", "Marcus", "Mario", "Marion", "Mark", "Marshall", "Martin", "Marvin", "Matt", "Matthew", "Maurice", "Max", "Melvin", "Michael", "Micheal", "Mike", "Mitchell", "Nathan", "Nathaniel", "Neil", "Nelson", "Nicholas", "Norman", "Oliver", "Oscar", "Otis", "Patrick", "Paul", "Perry", "Peter", "Phil", "Philip", "Phillip", "Ralph", "Randall", "Randy", "Ray", "Raymond", "Reginald", "Rex", "Richard", "Rick", "Rickey", "Ricky", "Robert", "Rodney", "Roger", "Ron", "Ronald", "Ronnie", "Ross", "Roy", "Russell", "Ryan", "Sam", "Samuel", "Scott", "Sean", "Seth", "Shane", "Shannon", "Shaun", "Shawn", "Sidney", "Stanley", "Stephen", "Steve", "Steven", "Ted", "Terry", "Theodore", "Thomas", "Tim", "Timothy", "Todd", "Tom", "Tommy", "Tony", "Tracy", "Travis", "Troy", "Tyler", "Tyrone", "Vernon", "Victor", "Vincent", "Virgil", "Wade", "Wallace", "Walter", "Warren", "Wayne", "Wesley", "Willard", "William", "Willie", "Zachary", "Zane", "Thot Clapper", "Grim Reaper", "real dev", "fake dev", "the void", "&#*!@$^*&$", "error 404", "ej", "Amara", "Lucifer", "Castiel"];
                constructor(t={
                    x: 0,
                    y: 0
                }, e=0, i=5) {
                    super(t),
                    this.team = -69,
                    this.target = null,
                    this.targetTick = 0,
                    this.randomMovementTick = 0,
                    this.name = ":" + u.names[Math.floor(Math.random() * u.names.length)] + ":",
                    this.client = new m(1024 + this.id),
                    this.client.body = this,
                    this.client.addXP((0,
                    a.UU)(i) + 1),
                    this.index = 255;
                    for (let t = 0; t < this.petalSlots.length; t++) {
                        const i = Math.max(0, e - 2 * Math.random() | 0)
                          , s = (0,
                        n.hf)(e);
                        this.client.slots[t] = {
                            id: s,
                            rarity: i
                        },
                        this.petalSlots[t].define(n.GJ[s], i)
                    }
                    h.A.livingMobCount++,
                    h.A.isWaves && h.A.aliveMobs.push(this)
                }
                update() {
                    this.target && this.target.health.isDead && (this.target = null),
                    this.target ? (this.moveAngle = Math.atan2(this.target.y - this.y, this.target.x - this.x),
                    this.moveStrength = this.speed,
                    this.health.ratio < .334 ? (this.defend = !0,
                    this.attack = !1,
                    this.moveAngle += Math.PI + .5 * Math.sin(performance.now() / 2500)) : (this.defend = !1,
                    this.attack = !0)) : this.attack = this.defend = !1,
                    super.update()
                }
                collide() {
                    super.collide(),
                    this.targetTick-- <= 0 && (this.targetTick = 30,
                    this.target = this.findTarget(1024, !0))
                }
                destroy() {
                    super.destroy(),
                    h.A.isWaves && (h.A.aliveMobs = h.A.aliveMobs.filter((t => t.id !== this.id))),
                    h.A.livingMobCount--;
                    this.getTopDamagers(10).filter((t => t.type === s.wv.PLAYER)).forEach((t => {
                        const e = h.A.clients.get(t.clientID);
                        if (e)
                            for (let t = 0; t < this.petalSlots.length; t++)
                                Math.random() < .85 || new f({
                                    x: this.x + 75 * Math.random() - 37.5,
                                    y: this.y + 75 * Math.random() - 37.5
                                },e,this.petalSlots[t].config.id,Math.min(e.highestRarity + 1, this.petalSlots[t].rarity))
                    }
                    ))
                }
            }
            class y extends c {
                static segmentedLength = 0;
                static TEMPORARY_RANDOM_RARITY() {
                    const t = Math.random();
                    return t > .99995 ? 5 : t > .995 ? 4 : t > .9 ? 3 : t > .8 ? 2 : t > .6 ? 1 : 0
                }
                constructor(t={
                    x: 0,
                    y: 0
                }) {
                    super(t),
                    this.type = s.wv.MOB,
                    this.index = 0,
                    this.rarity = 0,
                    this.facing = Math.random() * Math.PI * 2,
                    this.movementAngle = Math.random() * Math.PI * 2,
                    this.moveStrength = 0,
                    this.tick = 0,
                    this.team = -69,
                    this.aggressive = !1,
                    this.neutral = !1,
                    this.head = null,
                    this.target = null,
                    this.targetTick = 0,
                    this.extraTicker = 0,
                    this.projectile = null,
                    this.givesXP = !0,
                    h.A.livingMobCount++,
                    this.config = n.ey[0],
                    this.lastSeen = performance.now() + 1e4,
                    this.hatchable = null,
                    this.poopable = null,
                    this.deathEvent = null,
                    this.movesInBursts = !1,
                    this.spins = {
                        rate: 0,
                        constant: !1
                    },
                    this.fleeAtLowHealth = 0,
                    this.healing = 0,
                    this.segmentID = -1,
                    this.ropeBodies = null,
                    this._countsTowardsMobCount = !0
                }
                get countsTowardsMobCount() {
                    return this._countsTowardsMobCount
                }
                set countsTowardsMobCount(t) {
                    const e = this._countsTowardsMobCount;
                    e !== t && (this._countsTowardsMobCount = t,
                    e && !t && h.A.livingMobCount--,
                    !e && t && h.A.livingMobCount++)
                }
                define(t, e=0) {
                    this.config = t,
                    e = Math.min(t.tiers.length - 1, e);
                    const i = t.tiers[e];
                    if (this.health.set(i.health),
                    this.damage = i.damage,
                    this.gotloot = [],
                    this.size = i.size * (.98 + .04 * Math.random()) * (t.sizeRand.min + Math.random() * t.sizeRand.max),
                    this.speed = t.speed,
                    this.index = t.id,
                    this.dead =false,
                    this.rarity = e,
                    this.healthRatioLast = 1,
                    this.aggressive = t.aggressive,
                    this.neutral = t.neutral,
                    this.spins = t.spins,
                    this.specialattack = false,
                    this.healing = t.healing,
                    this.fleeAtLowHealth = t.fleeAtLowHealth,
                    this.armor = 0,
                    this.spawnInvincibility = !0,
                    setTimeout(( () => {
                        this.spawnInvincibility = !1
                    }
                    ), 334),
                    this.health.damageReduction += i.damageReduction,
                    i.projectile && (this.projectile = {
                        ...i.projectile,
                        tick: 0
                    }),
                    i.poison && (this.poison.toApply.damage = i.poison.damage,
                    this.poison.toApply.timer = i.poison.duration),
                    "Demon" === t.name && (this.extraTicker = 100),
                    t.damageReflection && (this.damageReflection.reflection = t.damageReflection.reflection,
                    this.damageReflection.cap = t.damageReflection.cap),
                    i.armor && (this.armor = i.armor),
                    i.antHoleSpawns) {
                        const t = structuredClone(i.antHoleSpawns)
                          , e = t => {
                            const e = Math.random() * Math.PI * 2
                              , i = this.size + t + 1;
                            return {
                                x: this.x + Math.cos(e) * i,
                                y: this.y + Math.sin(e) * i
                            }
                        }
                        ;
                        for (let e = 0; e < t.length; e++)
                            t[e].maxCount = t[e].count;
                        for (const i of t)
                            if (i.count > 4)
                                for (let t = 0, s = 4 * Math.random() | 0; t < s; t++)
                                    setTimeout(( () => {
                                        const t = Math.max(0, this.rarity - (2 * Math.random() | 0))
                                          , s = new y(e(n.ey[i.index].tiers[t].size));
                                        s.define(n.ey[i.index], t),
                                        s.team = this.team,
                                        s.friendly = this.friendly,
                                        i.count--,
                                        i.maxCount--,
                                        h.A.isWaves && (h.A.maxMobs++,
                                        h.A.aliveMobs.push(s))
                                    }
                                    ), 64);
                        this.health.onDamage = () => {
                            for (const i of t)
                                if (!(i.count <= 0) && (!i.minHealthRatio || this.health.ratio <= i.minHealthRatio))
                                    for (; i.count > 0 && (i.minHealthRatio < 1 || this.health.ratio <= (i.count + 1) / i.maxCount); ) {
                                        const t = 1 === i.maxCount ? this.rarity : Math.max(0, this.rarity - (2 * Math.random() | 0))
                                          , s = new y(e(n.ey[i.index].tiers[t].size));
                                        s.define(n.ey[i.index], t),
                                        s.aggressive = !0,
                                        s.team = this.team,
                                        s.friendly = this.friendly,
                                        i.count--,
                                        h.A.isWaves && (h.A.maxMobs++,
                                        h.A.aliveMobs.push(s))
                                    }
                        }
                    }
                    if (t.hatchables?.length > 0 && (this.hatchable = structuredClone(t.hatchables[Math.random() * t.hatchables.length | 0])),
                    t.poopable && (this.poopable = {
                        index: t.poopable.index,
                        ticker: 0,
                        interval: t.poopable.interval
                    }),
                    t.segment) {
                        const e = y.segmentedLength++;
                        let i = 3
                          , s = Math.max(.1, .8 - this.rarity / 9 * .31);
                        for (let t = 0; t < 27 && Math.random() < s; t++)
                            i++;
                        let a = this;
                        this.segmentID = e,
                        this.segmentBodies = [];
                        for (let s = 0; s < i; s++) {
                            const i = new y(this);
                            i.head = a,
                            i.define(n.ey[t.segment], this.rarity),
                            i.countsTowardsMobCount = !0,
                            i.segmentID = e,
                            i.team = this.team,
                            i.friendly = this.friendly,
                            i.x = a.x - Math.cos(this.facing) * (this.size + i.size + 1),
                            i.y = a.y - Math.sin(this.facing) * (this.size + i.size + 1),
                            i.facing = this.facing,
                            this.segmentBodies.push(i),
                            h.A.isWaves && !i.friendly && h.A.aliveMobs.push(i),
                            a = i
                        }
                    }
                    if (t.branch) {
                        const e = y.segmentedLength++;
                        for (let i = 0; i < t.branch.branches; i++) {
                            const s = t.branch.branchLength;
                            let a = this;
                            this.segmentID = e;
                            for (let r = 0; r < s; r++) {
                                const s = new y(this);
                                s.head = a,
                                s.define(n.ey[t.branch.index], this.rarity),
                                s.countsTowardsMobCount = !1,
                                s.segmentID = e,
                                s.team = this.team,
                                s.friendly = this.friendly;
                                const r = this.facing + i * (2 * Math.PI) / t.branch.branches;
                                s.x = a.x - Math.cos(r) * (this.size + s.size + 1),
                                s.y = a.y - Math.sin(r) * (this.size + s.size + 1),
                                this.facing = r / 3,
                                s.facing = r,
                                h.A.isWaves && !s.friendly && h.A.aliveMobs.push(s),
                                a = s
                            }
                        }
                    }
                    if ("Leech" === t.name && !this.head) {
                        const t = 4 + 5 * Math.random() | 0;
                        let e = this;
                        const i = y.segmentedLength++;
                        this.segmentID = i,
                        this.ropeBodies = [];
                        for (let s = 0; s < t; s++) {
                            const t = new y(this);
                            t.head = e,
                            t.define(n.ey[this.index], this.rarity),
                            t.size = this.size,
                            t.givesXP = !1,
                            t.health = this.health,
                            t.canBeViewed = !1,
                            t.countsTowardsMobCount = !1,
                            t.segmentID = i,
                            t.team = this.team,
                            t.parent = this,
                            t.x = e.x - Math.cos(this.facing) * (this.size + t.size + 1),
                            t.y = e.y - Math.sin(this.facing) * (this.size + t.size + 1),
                            t.facing = this.facing,
                            this.ropeBodies.push(t),
                            e = t
                        }
                    }
                    if (this.movesInBursts = t.movesInBursts,
                    "Dandelion" === this.config.name) {
                        const t = [];
                        this.id--,
                        c.idAccumulator--;
                        for (let e = 0; e < 8; e++) {
                            const i = 2 * Math.PI / 8 * e
                              , s = new g(this,-1,-1);
                            s.team = this.team,
                            s.define(n.GJ[(0,
                            n.zw)("Dandelion")], this.rarity),
                            s.facing = i,
                            s.pushability = 0,
                            s.dandelionBind = this,
                            s.size = this.size / 2,
                            s.damage *= .5,
                            s.health.set(.85 * s.health.maxHealth),
                            s.x = this.x + Math.cos(i) * (this.size + 1.2 * s.size),
                            s.y = this.y + Math.sin(i) * (this.size + 1.2 * s.size),
                            t.push(s)
                        }
                        let e = !1;
                        this.health.onDamage = () => {
                            t.forEach((t => {
                                t.dandelionBind = !1,
                                t.moveAngle = t.facing,
                                t.launched = !0,
                                t.range = 67.5
                            }
                            )),
                            e = !0
                        }
                        ,
                        this.deathEvent = () => {
                            e || t.forEach((t => t.destroy()))
                        }
                        ,
                        this.id = c.idAccumulator++,
                        h.A.entities.set(this.id, this)
                    }
                    "Spirit" === this.config.name && (this.deathEvent = () => {
                        const t = n.ey.filter((t => {
                            if (!t.isSystem)
                                return !0
                        }
                        ))
                          , e = new y(this);
                        e.friendly = this.friendly,
                        e.team = this.team,
                        e.define(t[Math.random() * t.length | 0], this.rarity)
                    }
                    ),
                    t.strafes && (this.strafes = {
                        ...t.strafes,
                        cTick: 0,
                        mTick: 0,
                        direction: 0
                    }),
                    this.pushability = t.pushability
                }
                spawnMob(index) {
                
                    const mobConfig = n.ey.find(m => m.name === index);
                    if (!mobConfig) return;
                
                    const newMob = new y(this);
                    newMob.define(mobConfig, 6);
                    const direction = Math.random() * 360
                    newMob.x = this.x + Math.sin(direction), newMob.y = this.y + Math.cos(direction)
                }
                update() {
                    if (this.parent.type === s.wv.PLAYER && this.parent.health.isDead)
                        this.destroy();
                    else {
                        if (this.rarity > 6) {
                            if (this.config.name === "Rock" && this.healthRatioLast > Math.floor(this.health.ratio * 10) / 10) {
                                this.spawnMob("Rock")
                                this.healthRatioLast = Math.floor(this.health.ratio * 10) / 10
                            }
                        }
                        if (this.specialattack === false) {
                        if (this.health.health === null || !this.health.health) {
                            void this.destroy()
                        }
                        if (this.health.health === this.health.maxHealth &&h.A.mobsExpire && (null === this.head || this.head.health.isDead) && this.lastSeen + ((this.rarity > 6 || this.healthRatio < 0.99) ? 64e8 : 15e3) < performance.now())
                            return this.damagedBy = [],
                            void this.destroy();
                        if (this.healing > 0 && this.health.ratio > 0 && !this.dandelionCooldown && (this.health.health = Math.min(this.health.maxHealth, this.health.health + this.health.maxHealth * this.healing)),
                        null !== this.hatchable && (this.hatchable.time--,
                        this.hatchable.time <= 0)) {
                            this.destroy();
                            const t = new y(this);
                            return t.define(n.ey[this.hatchable.index], this.rarity),
                            t.target = this.parent.target,
                            t.team = this.team,
                            t.friendly = this.friendly,
                            h.A.isWaves && !t.friendly && h.A.aliveMobs.push(t),
                            void (this.hatchable = null)
                        }
                        if (null !== this.head) {
                            if (this.head.health.isDead)
                                return this.head = null,
                                void (this.countsTowardsMobCount = !0);
                            const t = Math.atan2(this.head.y - this.y, this.head.x - this.x);
                            this.x = this.head.x - Math.cos(t) * (this.size + this.head.size + 1),
                            this.y = this.head.y - Math.sin(t) * (this.size + this.head.size + 1),
                            this.facing = t
                        } else if (this.speed > 0) {
                            if (this.tick--,
                            this.tick2 && this.tick2--,
                            this.target?.health.ratio > 0) {
                                if (null !== this.poopable && (this.poopable.ticker++,
                                this.poopable.ticker >= this.poopable.interval - 22.5 && this.velocity.multiply(-.1),
                                this.poopable.ticker >= this.poopable.interval)) {
                                    this.poopable.ticker = 0;
                                    const t = new y(this);
                                    t.x -= Math.cos(this.facing) * this.size * 2,
                                    t.y -= Math.sin(this.facing) * this.size * 2,
                                    t.define(n.ey[this.poopable.index], Math.max(0, this.rarity - 1)),
                                    t.team = this.team,
                                    t.parent = this,
                                    t.friendly = this.friendly,
                                    h.A.isWaves && (h.A.maxMobs++,
                                    h.A.aliveMobs.push(t))
                                }
                                if ("Demon" === this.config.name && (this.extraTicker--,
                                this.extraTicker <= 0)) {
                                    const t = Math.random() * Math.PI * 2
                                      , e = Math.random() * (8 * this.target.size);
                                    new A(this,{
                                        x: this.target.x + Math.cos(t) * e,
                                        y: this.target.y + Math.sin(t) * e
                                    },1.25 * this.size * (1 + .2 * Math.random() - .1),1500 + 1500 * Math.random()),
                                    this.extraTicker = 100 + 100 * Math.random()
                                }
                                if (this.config.sandstormMovement) {
                                    const t = Math.atan2(this.target.y - this.y, this.target.x - this.x);
                                    if ((0,
                                    a.t1)(this, this.target) > Math.pow(5 * this.size + 4 * this.target.size + 50, 2))
                                        this.movementAngle = t,
                                        this.moveStrength = this.speed,
                                        this.extraTicker = t + Math.PI + Math.random() * Math.PI / 1.5 - Math.PI / 3;
                                    else {
                                        const e = (.7 * Math.sin(this.extraTicker) + .6) * (10 * this.target.size + 5 * this.size)
                                          , i = this.target.x + Math.cos(this.extraTicker) * e
                                          , s = this.target.y + Math.sin(this.extraTicker) * e
                                          , n = (0,
                                        a.t1)(this, {
                                            x: i,
                                            y: s
                                        })
                                          , h = Math.atan2(s - this.y, i - this.x);
                                        n < 1.25 * this.size && (this.extraTicker = t + Math.PI + Math.random() * Math.PI - Math.PI / 2),
                                        this.movementAngle = h,
                                        this.moveStrength = this.speed
                                    }
                                } else if (this.movesInBursts)
                                    this.tick <= 0 && (this.tick = 35 - this.rarity,
                                    this.movementAngle = Math.atan2(this.target.y - this.y, this.target.x - this.x),
                                    this.moveStrength = this.speed),
                                    this.moveStrength *= .7;
                                else if (this.strafes?.cTick < this.strafes?.cooldown)
                                    this.strafes.cTick++;
                                else {
                                    if (this.movementAngle = Math.atan2(this.target.y - this.y, this.target.x - this.x),
                                    this.config.tiers[this.rarity].lightning) {
                                        (0,
                                        a.t1)(this, this.target) < .85 * Math.pow(this.config.tiers[this.rarity].lightning.range, 2) ? this.moveStrength = 0 : this.moveStrength = this.speed
                                    } else if (this.projectile && !this.strafes || this.strafes?.mTick > this.strafes?.length)
                                        if (!1 === this.projectile.runs) {
                                            (0,
                                            a.t1)(this, this.target) < .85 * Math.pow(this.projectile.range * this.projectile.speed, 2) ? this.moveStrength = 0 : this.moveStrength = this.speed
                                        } else
                                            this.moveStrength = this.speed;
                                    else
                                        this.moveStrength = this.speed;
                                    this.health.ratio < this.fleeAtLowHealth && (this.movementAngle += Math.PI,
                                    this.moveStrength *= .85),
                                    this.strafes && (this.strafes.mTick < this.strafes.length ? (this.movementAngle += (0 == this.strafes.direction ? Math.PI : -Math.PI) / 2,
                                    this.moveStrength *= this.strafes.speedMult,
                                    this.strafes.cTick = this.strafes.cooldown,
                                    Math.random() < .025 && (this.strafes.direction = !this.strafes.direction)) : (this.strafes.mTick = 0,
                                    this.strafes.cTick = 0),
                                    this.strafes.mTick++)
                                }
                            } else
                                this.movesInBursts ? this.moveStrength *= .7 : this.config?.centipedeMovement ? this.parent.type === s.wv.PLAYER ? (this.movementAngle = Math.atan2((this.parent.y) - this.y, (this.parent.x) - this.x),
                                this.moveStrength = (0,
                                a.t1)(this, this.parent) < this.size + 2 * this.parent.size ? 0 : this.speed) : this.tick <= 0 && (this.tick = 90,
                                this.moveStrength !== this.speed / 5 && (this.movementAngle = Math.random() * Math.PI * 2,
                                this.moveStrength = this.speed / 5),
                                Math.random() > .5 ? this.movementAngle += 1.2 * (.4 * Math.random() + .6) : this.movementAngle -= 1.2 * (.4 * Math.random() + .6)) : this.config.desertCentipedeMovement ? this.tick <= 0 && (this.tick = 2.25,
                                this.clockwise ? this.movementAngle -= .15 : this.movementAngle += .15,
                                (!this.tick2 || this.tick2 <= 0) && (this.tick2 = 90,
                                this.movementAngle = Math.random() * Math.PI * 2,
                                this.clockwise = Math.random() > .5),
                                this.moveStrength !== this.speed && (this.movementAngle = Math.random() * Math.PI * 2,
                                this.moveStrength = this.speed)) : this.config.bumblebeeMovement ? this.tick <= 0 && (this.tick = 135,
                                this.movementAngle = Math.random() * Math.PI * 2,
                                this.moveStrength = this.speed) : (this.parent.type === s.wv.PLAYER ? (this.movementAngle = Math.atan2((this.parent.y) - this.y, (this.parent.x) - this.x),
                                this.moveStrength = (0,
                                a.t1)(this, this.parent) < this.size + 2 * this.parent.size ? 0 : this.speed) : this.tick <= 0 && (this.tick = 90,
                                this.movementAngle = Math.random() * Math.PI * 2,
                                this.moveStrength = this.speed),
                                this.moveStrength *= .95);
                            this.config.moveInSines && (this.config.bumblebeeMovement ? this.movementAngle += .1 * Math.sin(performance.now() / 120 + this.id) * (.5 * this.velocity.magnitude) : this.movementAngle += .1 * Math.sin(performance.now() / 120 + this.id) * this.velocity.magnitude);
                            this.velocity.x += Math.cos(this.movementAngle) * this.moveStrength,
                            this.velocity.y += Math.sin(this.movementAngle) * this.moveStrength;
                            this.spins ? this.facing += (0 == this.spins.constant ? this.velocity.magnitude : 1) / this.speed * .1 * this.spins.rate : this.facing = this.movementAngle,
                            this.strafes && this.target && this.strafes.cTick == this.strafes.cooldown && (this.facing -= (0 == this.strafes.direction ? Math.PI : -Math.PI) / 2)
                        }
                        if (null !== this.projectile) {
                            if (this.projectile.tick++,
                            this.projectile.aimbot && this.target?.velocity.magnitude > 0) {
                                const t = Math.sqrt((0,
                                a.t1)(this, this.target)) / this.projectile.speed / 2
                                  , e = this.target.x + this.target.velocity.x * t
                                  , i = this.target.y + this.target.velocity.y * t;
                                this.facing = Math.atan2(i - this.y, e - this.x)
                            }
                            if (("Bumblebee" === this.config.name || this.target?.health.ratio > 0) && this.projectile.tick >= this.projectile.cooldown)
                                if (this.projectile.tick = 0,
                                this.projectile.multiShot)
                                    for (let t = 0; t < this.projectile.multiShot.count; t++)
                                        setTimeout(( () => {
                                            if (this.health.isDead || null === this.target || this.target.health.isDead)
                                                return;
                                            const t = new g(this,-1,-1);
                                            t.define(n.GJ[this.projectile.petalIndex], this.rarity),
                                            t.index = this.projectile.petalIndex,
                                            t.size = this.size * this.projectile.size,
                                            t.health.set(this.projectile.health),
                                            t.damage = this.projectile.damage,
                                            t.speed = this.projectile.speed,
                                            t.launched = !0,
                                            t.range = this.projectile.range,
                                            t.spinSpeed = 0,
                                            t.nullCollision = this.projectile.nullCollision;
                                            let e = this.facing;
                                            this.projectile.multiShot.spread > 0 && (e += (Math.random() - .5) * this.projectile.multiShot.spread,
                                            t.speed *= 1 + (Math.random() - .5) * this.projectile.multiShot.spread),
                                            t.facing = t.moveAngle = e
                                        }
                                        ), t * this.projectile.multiShot.delay);
                                else {
                                    const t = new g(this,-1,-1);
                                    t.define(n.GJ[this.projectile.petalIndex], this.rarity),
                                    t.index = this.projectile.petalIndex,
                                    t.size = this.size * this.projectile.size,
                                    t.health.set(this.projectile.health),
                                    t.damage = this.projectile.damage,
                                    t.speed = this.projectile.speed,
                                    t.launched = !0,
                                    t.range = this.projectile.range,
                                    t.spinSpeed = 0,
                                    t.nullCollision = this.projectile.nullCollision,
                                    t.facing = t.moveAngle = this.facing,
                                    "Tank" === this.config.name && (t.x += Math.cos(this.facing) * this.size * 1.25,
                                    t.y += Math.sin(this.facing) * this.size * 1.25)
                                }
                        }
                        this.bindToRoom(),
                        super.update()
                    }
                    }
                }
                collide() {
                    if (super.collide(),
                    this.collideTerrain(),
                    this.targetTick--,
                    this.aggressive && ((this.targetTick <= 0 || null === this.target || this.target.health.isDead) && (this.targetTick = 25 + 100 * Math.random() | 0,
                    this.target = this.findTarget(12 * this.size + 50)),
                    this.target?.health.ratio > 0 && this.config.tiers[this.rarity].lightning)) {
                        const t = this.config.tiers[this.rarity].lightning;
                        this.extraTicker--,
                        this.extraTicker <= 0 && (new w(this).define(t.damage, t.range, t.bounces).bounce(),
                        this.extraTicker = t.cooldown * (.95 + .1 * Math.random()))
                    }
                }
                destroy() {
                    if (
                        this.deathEvent && this.deathEvent(),
                        super.destroy(),
                        !this.friendly &&
                        this.countsTowardsMobCount &&
                        Array.isArray(this.gotloot) &&
                        this.gotloot.length === 0 &&
                        h.A.livingMobCount--,
                        !this.givesXP
                    )
                    if (this.dead) {
                        this.dead === true
                         return
                        }
                    const tables = [
                        {minRarity: -2, maxRarity: 1},
                        {minRarity: -1, maxRarity: 1},
                        {minRarity: 0, maxRarity: 2},
                        {minRarity: 1, maxRarity: 3},
                        {minRarity: 2, maxRarity: 4},
                        {minRarity: 3, maxRarity: 5},
                        {minRarity: 4, maxRarity: 6},
                        {minRarity: 5, maxRarity: 6},
                        {minRarity: 5, maxRarity: 6},
                        {minRarity: 5, maxRarity: 7}
                    ]
                    const multis = [
                        [1,1,46.8,53.2],
                        [1,4.8,95.2],
                        [3,48.5,48.5],
                        [5,54.5,40.5],
                        [8,73,19],
                        [12.5,84,3.5],
                        [3,95.5,1.5],
                        [7.3,92.7],
                        [0.7,99.3],
                        [0.2,99.4,0.4]
                    ]
                    const table = tables[this.rarity];
                    const multi = multis[this.rarity];
                    const xpMultis = [1, 2, 6, 44, 400, 5400, 227000, 14000000, 170000000, 170000000]
                    const t = this.getTopDamagers(4 + (this.rarity > 6 ? 24 : 0), s.wv.PLAYER);
                    let e = "";
                    let looters = [];

                    if (t.forEach((t => {
                        if (t.clientID > 0) {
                            looters = [];
                            const e = h.A.clients.get(t.clientID);
                            if (e && !e.squad) {e.squad = [e.auth.username]};
                            if (e) { 
                            e.squad?.forEach(z => {
                                h.A.clients.forEach(zz => {
                                    if (e.squad.includes(zz?.auth?.username)) looters.push(zz);
                                })
                            })
                            looters?.forEach(player => {
                                if (player && !this.gotloot.includes(player.auth.username)) {
                                    this.gotloot.push(player.auth.username)
                                    player.addXP(xpMultis[this.rarity])
    
                                    const t = [];
    
                                    for (const i of n.ey[this.index].drops) {
    
                                        let weight = []
    
                                        let total = 0;
    
                                        for (let j = 0; j < 1 + (table.maxRarity - table.minRarity); j++) weight.push(Math.pow(i.chance, j) * multi[j]), total += (Math.pow(i.chance, j) * multi[j]);
    
                                        let random = Math.random() * total;
    
                                        let final = -1;
    
                                        for (let j = 0; j < 1 + (table.maxRarity - table.minRarity); j++) {
    
                                            random -= weight[j];
    
                                            if (random < 0) {
    
                                            final = j;
    
                                            break;
    
                                            }
    
                                        }
    
                                        if (final + table.minRarity < i.minRarity || final + table.minRarity < 0) {
    
                                            continue;
    
                                        }
    
                                        t.push(new f(this,player,i.index,final + table.minRarity))
    
                                    }
    
                                    for (let e = 0; e < t.length; e++)
    
                                        t[e].x += 30 * Math.cos(e / t.length * Math.PI * 2),
    
                                        t[e].y += 30 * Math.sin(e / t.length * Math.PI * 2)
    
                                }
                            })
                            

                        }
                        }

                    }

                    )),

                    !1 === this.config.isSystem && !this.friendly && !["Queen Ant Egg", "Termite Overmind Egg", "Queen Fire Ant Egg"].includes(this.config.name) && this.rarity >= h.A.announceRarity) {

                        if (t.length > 0) {

                            e = (0,

                            a.Br)(s.cK[this.rarity].name, !0) + " " + this.config.name + " was killed by ";

                            for (let i = 0, s = t.length; i < s; i++) {

                                if (!h.A.clients.has(t[i].clientID))

                                    continue;

                                const a = h.A.clients.get(t[i].clientID).username;

                                e += i === s - 1 ? 1 === s ? a : 2 === s ? " and " + a : ", and " + a : 0 === i ? a : ", " + a

                            }

                        } else

                            e = (0,

                            a.Br)(s.cK[this.rarity].name, !0) + " " + this.config.name + " despawned";

                        h.A.clients.forEach((t => t.systemMessage(e, s.cK[this.rarity].color)))
                            }
                        }
                    }
            class f {
                static idAccumulator = 1;
            
                constructor(pos, client, index, rarity, amount = 1) {
                    this.id = f.idAccumulator++;
                    this.x = pos.x;
                    this.y = pos.y;
                    this.client = client;
                    this.index = index;
                    this.rarity = rarity;
                    this.amount = amount ?? 1;
            
                    this.size = 20 + (this.amount * 10);
                    this.duration = 60 * Math.pow(1.1, rarity);
                    this.creation = performance.now();
            
                    this.client.addDrop(this);
            
                    h.A.drops.set(this.id, this);
                }
                update() {
                    if (this.creation + 1e3 * this.duration < performance.now() && this.destroy(),
                    null === this.client.body || this.client.body.health.isDead)
                        return;
                    const t = this.x - this.client.body.x
                      , e = this.y - this.client.body.y;
                    const sqroot = t * t + e * e 
                    sqroot < Math.pow(this.size + this.client.body.size + this.client.body.extraPickupRange + (this.client.skills?.skills?.magnetism?.level * 1500), 2) && this.client.pickupDrop(this) && this.destroy()
                }
                destroy() {
                    this.client.removeDrop(this),
                    h.A.drops.delete(this.id)
                }
            }
            class A {
                static idAccum = 1;
                constructor(t, e, i, s, a=t.rarity ?? 0) {
                    this.id = A.idAccum++,
                    this.parent = t,
                    this.x = e.x,
                    this.y = e.y,
                    this.size = i,
                    this.createdAt = Date.now(),
                    this.timer = s,
                    this.rarity = a,
                    h.A.pentagrams.set(this.id, this),
                    setTimeout(this.destroy.bind(this), s),
                    this.damage = Math.pow(this.rarity + 1, 3),
                    this.poisonDamage = .5 / 22.5 * Math.pow(this.rarity + 1, 3),
                    this.poisonTime = 112.5,
                    this.speedDebuff = .75,
                    this.speedDebuffTime = 112.5
                }
                define(t, e, i, s, a) {
                    return this.damage = t,
                    this.poisonDamage = e,
                    this.poisonTime = i,
                    this.speedDebuff = s,
                    this.speedDebuffTime = a,
                    this
                }
                destroy() {
                    h.A.pentagrams.delete(this.id),
                    this.parent.health.isDead || h.A.entities.forEach((t => {
                        if (t.parent.id === this.parent.id || t.parent.team === this.parent.team)
                            return;
                        const e = this.x - t.x
                          , i = this.y - t.y;
                        e * e + i * i < this.size * this.size && (t.health.damage(this.damage),
                        t.parent && "Leech" === t.config?.name ? (t.parent.damagedBy[this.parent.id] ??= [0, this.parent.type, this.parent.type === s.wv.PLAYER ? this.parent.name : this.parent.index, this.parent.type === s.wv.PLAYER && this.parent.client ? this.parent.client.id : null],
                        t.parent.damagedBy[this.parent.id][0] += this.damage) : (t.damagedBy[this.parent.id] ??= [0, this.parent.type, this.parent.type === s.wv.PLAYER ? this.parent.name : this.parent.index, this.parent.type === s.wv.PLAYER && this.parent.client ? this.parent.client.id : null],
                        t.damagedBy[this.parent.id][0] += this.damage),
                        t.poison.timer = this.poisonTime,
                        t.poison.damage = this.poisonDamage,
                        t.speedDebuff.timer = this.speedDebuffTime,
                        t.speedDebuff.multiplier = this.speedDebuff)
                    }
                    ))
                }
            }
            class w {
                static idAccum = 1;
                constructor(t) {
                    this.id = w.idAccum++,
                    this.parent = t,
                    this.points = [{
                        x: t.x,
                        y: t.y,
                        id: -1
                    }],
                    this.damage = 0,
                    this.range = 0,
                    this.bounces = 0,
                    this.remainTick = 3,
                    h.A.lightning.set(this.id, this)
                }
                define(t, e, i) {
                    return this.damage = t,
                    this.range = e,
                    this.bounces = i,
                    this
                }
                bounce() {
                    for (let t = 0; t < this.bounces; t++) {
                        const t = this.points[this.points.length - 1]
                          , e = h.A.spatialHash.retrieve({
                            _AABB: {
                                x1: t.x - this.range,
                                y1: t.y - this.range,
                                x2: t.x + this.range,
                                y2: t.y + this.range
                            }
                        });
                        let i = null
                          , a = 1 / 0;
                        if (e.forEach((e => {
                            if (e.parent.id === this.parent.id || e.parent.team === this.parent.team || this.points.some((t => t.id === e.id)) || e.type === s.wv.PETAL && !e.attractsLightning)
                                return;
                            if (e.type === s.wv.PETAL)
                                return i = e,
                                void (a = 0);
                            const n = t.x - e.x
                              , h = t.y - e.y
                              , r = n * n + h * h;
                            r < a && (i = e,
                            a = r)
                        }
                        )),
                        null === i)
                            break;
                        if (this.points.push({
                            x: i.x,
                            y: i.y,
                            id: i.id
                        }),
                        i.type === s.wv.PETAL)
                            break
                    }
                    for (let t = 1; t < this.points.length; t++) {
                        const e = h.A.entities.get(this.points[t].id);
                        if (e) {
                            if (e.type === s.wv.PLAYER) {
                                this.points[t].x += Math.random() * e.size * 2 - e.size,
                                this.points[t].y += Math.random() * e.size * 2 - e.size;
                                if ((0,
                                a.t1)(this.points[t], e) > e.size * e.size)
                                    continue
                            }
                            e.health.damage(this.damage),
                            e.parent && "Leech" === e.config?.name ? (e.parent.damagedBy[this.parent.id] ??= [0, this.parent.type, this.parent.type === s.wv.PLAYER ? this.parent.name : this.parent.index, this.parent.type === s.wv.PLAYER && this.parent.client ? this.parent.client.id : null],
                            e.parent.damagedBy[this.parent.id][0] += this.damage) : (e.damagedBy[this.parent.id] ??= [0, this.parent.type, this.parent.type === s.wv.PLAYER ? this.parent.name : this.parent.index, this.parent.type === s.wv.PLAYER && this.parent.client ? this.parent.client.id : null],
                            e.damagedBy[this.parent.id][0] += this.damage),
                            e.type === s.wv.MOB && e.neutral && (e.target = this.parent)
                        }
                    }
                }
                update() {
                    this.remainTick-- <= 0 && this.destroy()
                }
                destroy() {
                    h.A.lightning.delete(this.id)
                }
            }
            class b {
                constructor(t, e, i, s, a) {
                    this.numSides = t.length,
                    this.numPoints = 2 * this.numSides,
                    this.sides = new Float32Array(this.numPoints),
                    this.points = new Float32Array(this.numPoints),
                    this.x = 0,
                    this.y = 0,
                    this.radius = 0,
                    this.rotation = 0,
                    this._AABB = {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    };
                    for (let e = 0; e < this.numSides; e++)
                        this.sides[2 * e] = t[e].x,
                        this.sides[2 * e + 1] = t[e].y;
                    this.transform(e, i, s, a)
                }
                transform(t, e, i, s) {
                    if (this.x === t && this.y === e && this.radius === i && this.rotation === s)
                        return;
                    const a = Math.cos(s)
                      , n = Math.sin(s);
                    for (let s = 0; s < this.numPoints; s += 2) {
                        const h = this.sides[s]
                          , r = this.sides[s + 1];
                        this.points[s] = t + (h * a - r * n) * i,
                        this.points[s + 1] = e + (h * n + r * a) * i
                    }
                    this.x = t,
                    this.y = e,
                    this.radius = i,
                    this.rotation = s,
                    this._AABB = this.getAABB()
                }
                getAABB() {
                    let t = 1 / 0
                      , e = 1 / 0
                      , i = -1 / 0
                      , s = -1 / 0;
                    for (let a = 0; a < this.numPoints; a += 2) {
                        const n = this.points[a]
                          , h = this.points[a + 1];
                        n < t && (t = n),
                        h < e && (e = h),
                        n > i && (i = n),
                        h > s && (s = h)
                    }
                    return {
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: s
                    }
                }
                pointIsInside(t, e) {
                    let i = !1
                      , s = this.points[this.numPoints - 2]
                      , a = this.points[this.numPoints - 1];
                    for (let n = 0; n < this.numPoints; n += 2) {
                        let h = this.points[n]
                          , r = this.points[n + 1];
                        e < a != e < r && t < (h - s) * (e - a) / (r - a) + s && (i = !i),
                        s = h,
                        a = r
                    }
                    return i
                }
                circleIntersectsEdge(t, e, i, s, a, n, h) {
                    const r = i - t
                      , o = s - e
                      , l = a - t
                      , d = n - e
                      , c = Math.max(0, Math.min(1, (r * l + o * d) / (r * r + o * o)))
                      , g = t + r * c - a
                      , p = e + o * c - n;
                    return g * g + p * p <= h * h
                }
                circleIntersects(t, e, i) {
                    if (this.pointIsInside(t, e))
                        return !0;
                    for (let s = 0; s < this.numPoints; s += 2)
                        if (this.circleIntersectsEdge(this.points[s], this.points[s + 1], this.points[(s + 2) % this.numPoints], this.points[(s + 3) % this.numPoints], t, e, i))
                            return !0;
                    return !1
                }
                getClosestPointOnEdge(t, e, i, s, a, n) {
                    const h = i - t
                      , r = s - e
                      , o = (h * (a - t) + r * (n - e)) / (h * h + r * r)
                      , l = Math.max(0, Math.min(1, o));
                    return {
                        x: t + h * l,
                        y: e + r * l
                    }
                }
                resolve(t, e, i) {
                    i += 3;
                    let s = 1 / 0
                      , a = null;
                    for (let i = 0; i < this.numPoints; i += 2) {
                        const n = this.getClosestPointOnEdge(this.points[i], this.points[i + 1], this.points[(i + 2) % this.numPoints], this.points[(i + 3) % this.numPoints], t, e)
                          , h = n.x - t
                          , r = n.y - e
                          , o = h * h + r * r;
                        o < s && (s = o,
                        a = n)
                    }
                    const n = a.x - t
                      , h = a.y - e
                      , r = Math.atan2(h, n);
                    t = a.x - Math.cos(r) * i,
                    e = a.y - Math.sin(r) * i;
                    let o = Math.atan2(e - a.y, t - a.x);
                    return this.pointIsInside(t, e) && (o += Math.PI),
                    {
                        x: a.x + Math.cos(o) * i,
                        y: a.y + Math.sin(o) * i,
                        angle: o
                    }
                }
            }
            class M {
                static idAccum = 1;
                constructor(t, e, i) {
                    this.id = M.idAccum++,
                    this.x = t.x,
                    this.y = t.y,
                    this.size = e;
                    const a = (0,
                    s.ai)(i);
                    this.type = a.id,
                    this.polygon = new b(a.terrain,this.x,this.y,this.size,0),
                    this.gridX = 0,
                    this.gridY = 0,
                    h.A.terrain.set(this.id, this)
                }
                destroy() {
                    h.A.terrain.delete(this.id),
                    h.A.updateTerrain()
                }
            }
        }
    }, n = {};
    function h(t) {
        var e = n[t];
        if (void 0 !== e)
            return e.exports;
        var i = n[t] = {
            exports: {}
        };
        return a[t](i, i.exports, h),
        i.exports
    }
    t = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__",
    e = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__",
    i = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__",
    s = t => {
        t && t.d < 1 && (t.d = 1,
        t.forEach((t => t.r--)),
        t.forEach((t => t.r-- ? t.r++ : t())))
    }
    ,
    h.a = (a, n, h) => {
        var r;
        h && ((r = []).d = -1);
        var o, l, d, c = new Set, g = a.exports, p = new Promise(( (t, e) => {
            d = e,
            l = t
        }
        ));
        p[e] = g,
        p[t] = t => (r && t(r),
        c.forEach(t),
        p.catch((t => {}
        ))),
        a.exports = p,
        n((a => {
            var n;
            o = (a => a.map((a => {
                if (null !== a && "object" == typeof a) {
                    if (a[t])
                        return a;
                    if (a.then) {
                        var n = [];
                        n.d = 0,
                        a.then((t => {
                            h[e] = t,
                            s(n)
                        }
                        ), (t => {
                            h[i] = t,
                            s(n)
                        }
                        ));
                        var h = {};
                        return h[t] = t => t(n),
                        h
                    }
                }
                var r = {};
                return r[t] = t => {}
                ,
                r[e] = a,
                r
            }
            )))(a);
            var h = () => o.map((t => {
                if (t[i])
                    throw t[i];
                return t[e]
            }
            ))
              , l = new Promise((e => {
                (n = () => e(h)).r = 0;
                var i = t => t !== r && !c.has(t) && (c.add(t),
                t && !t.d && (n.r++,
                t.push(n)));
                o.map((e => e[t](i)))
            }
            ));
            return n.r ? l : h()
        }
        ), (t => (t ? d(p[i] = t) : l(g),
        s(r)))),
        r && r.d < 0 && (r.d = 0)
    }
    ,
    h.d = (t, e) => {
        for (var i in e)
            h.o(e, i) && !h.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
    }
    ,
    h.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    h(58)
}
)();

