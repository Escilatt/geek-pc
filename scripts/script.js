const cpus = {
    intel: [
        { value: "i3-10100", price:"100", consumo: "125", text: "Intel Core i3-10100", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-10100f", price:"81.99", consumo: "125", text: "Intel Core i3-10100F", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-10100t", price:"NO STOCK", consumo: "125", text: "Intel Core i3-10100T", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-10105", price:"121.99", consumo: "125", text: "Intel Core i3-10105", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-10105f", price:"NO STOCK", consumo: "125", text: "Intel Core i3-10105F", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-10300", price:"NO STOCK", consumo: "125", text: "Intel Core i3-10300", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-10300t", price:"NO STOCK", consumo: "125", text: "Intel Core i3-10300T", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-10305", price:"NO STOCK", consumo: "125", text: "Intel Core i3-103005", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-10320", price:"NO STOCK", consumo: "125", text: "Intel Core i3-10320", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-11100", price:"NO STOCK", consumo: "125", text: "Intel Core i3-11100", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] }},
        { value: "i3-11105", price:"NO STOCK", consumo: "125", text: "Intel Core i3-11105", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-12100", price:"128.59", consumo: "125", text: "Intel Core i3-12100", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-12100f", price:"98.59", consumo: "125", text: "Intel Core i3-12100F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-12100t", price:"NO STOCK", consumo: "125", text: "Intel Core i3-12100T", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-12300", price:"NO STOCK", consumo: "125", text: "Intel Core i3-12300", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] }  },
        { value: "i3-12300t", price:"NO STOCK", consumo: "125", text: "Intel Core i3-12300T", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] }},
        { value: "i3-12400", price:"175.99", consumo: "125", text: "Intel Core i3-12400", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] }  },
        { value: "i3-12400f", price:"132.99", consumo: "125", text: "Intel Core i3-12400F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] }  },
        { value: "i3-13100", price:"135.99", consumo: "125", text: "Intel Core i3-13100", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-13100f", price:"103.99", consumo: "125", text: "Intel Core i3-13100F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-14100", price:"146.99", consumo: "125", text: "Intel Core i3-14100", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-14100f", price:"106.99", consumo: "125", text: "Intel Core i3-14100F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-13100t", price:"NO STOCK", consumo: "125", text: "Intel Core i3-13100T", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i3-13150", price:"NO STOCK", consumo: "125", text: "Intel Core i3-13150", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-10400", price:"142", consumo: "125", text: "Intel Core i5-10400", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-10400f", price:"120", consumo: "125", text: "Intel Core i5-10400F", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-10500", price:"NO STOCK", consumo: "125", text: "Intel Core i5-10500", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-10500t", price:"NO STOCK", consumo: "125", text: "Intel Core i5-10500T", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-10600", price:"NO STOCK", consumo: "125", text: "Intel Core i5-10600", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-10600k", price:"236", consumo: "125", text: "Intel Core i5-10600K", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-10600kf", price:"275.59", consumo: "125", text: "Intel Core i5-10600KF", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-10600t", price:"NO STOCK", consumo: "125", text: "Intel Core i5-10600T", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-11400", price:"183.99", consumo: "125", text: "Intel Core i5-11400", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-11400f", price:"137.99", consumo: "125", text: "Intel Core i5-11400F", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-11500", price:"NO STOCK", consumo: "125", text: "Intel Core i5-11500", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-11500k", price:"NO STOCK", consumo: "125", text: "Intel Core i5-11500K", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-11600", price:"284.59", consumo: "125", text: "Intel Core i5-11600", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-11600k", price:"212.99", consumo: "125", text: "Intel Core i5-11600K", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-11600kf", price:"NO STOCK", consumo: "125", text: "Intel Core i5-11600KF", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-12400", price:"NO STOCK", consumo: "125", text: "Intel Core i5-12400", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-12400f", price:"NO STOCK", consumo: "125", text: "Intel Core i5-12400F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-12400t", price:"NO STOCK", consumo: "125", text: "Intel Core i5-12400T", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] }},
        { value: "i5-12500", price:"257.59", consumo: "125", text: "Intel Core i5-12500", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-12600", price:"NO STOCK", consumo: "125", text: "Intel Core i5-12600", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-12600k", price:"252.59", consumo: "125", text: "Intel Core i5-12600K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-12600kf", price:"212.59", consumo: "125", text: "Intel Core i5-12600KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-12700kf", price:"305.59", consumo: "125", text: "Intel Core i5-12700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-13400", price:"243.99", consumo: "125", text: "Intel Core i5-13400", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-13400f", price:"184.99", consumo: "125", text: "Intel Core i5-13400F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-13500", price:"294.59", consumo: "125", text: "Intel Core i5-13500", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-13600", price:"NO STOCK", consumo: "125", text: "Intel Core i5-13600", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-13600k", price:"NO STOCK", consumo: "125", text: "Intel Core i5-13600K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-13600kf", price:"304.99", consumo: "125", text: "Intel Core i5-13600KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-14400", price:"251.59", consumo: "125", text: "Intel Core i5-14400", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-14400k", price:"206.59", consumo: "125", text: "Intel Core i5-14400K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-14600k", price:"316", consumo: "125", text: "Intel Core i5-14600K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i5-14600kf", price:"325.59", consumo: "125", text: "Intel Core i5-14600Kf", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-10700", price:"302.99", consumo: "125", text: "Intel Core i7-10700", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-10700f", price:"333.99", consumo: "125", text: "Intel Core i7-10700F", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] }  },
        { value: "i7-10700k", price:"NO STOCK", consumo: "125", text: "Intel Core i7-10700K", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-10700kf", price:"344.59", consumo: "125", text: "Intel Core i7-10700KF", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-10700t", price:"NO STOCK", consumo: "125", text: "Intel Core i7-10700T", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-11700", price:"NO STOCK", consumo: "125", text: "Intel Core i7-11700", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-11700f", price:"367.99", consumo: "125", text: "Intel Core i7-11700F", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-11700k", price:"NO STOCK", consumo: "125", text: "Intel Core i7-11700K", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-11700kf", price:"NO STOCK", consumo: "125", text: "Intel Core i7-11700KF", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-12700", price:"321.59", consumo: "125", text: "Intel Core i7-12700", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-12700f", price:"NO STOCK", consumo: "125", text: "Intel Core i7-12700F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-12700k", price:"354.59", consumo: "125", text: "Intel Core i7-12700K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-12700kf", price:"283.99", consumo: "125", text: "Intel Core i7-12700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-13700k", price:"375", consumo: "125", text: "Intel Core i7-13600K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-13700", price:"475.99", consumo: "125", text: "Intel Core i7-13700", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-13700f", price:"451.59", consumo: "125", text: "Intel Core i7-13700F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-13700k", price:"447.99", consumo: "125", text: "Intel Core i7-13700K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },        
        { value: "i7-14700", price:"469.59", consumo: "65", text: "Intel Core i7-14700", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },{ value: "i7-13700kf", price:"435.990", text: "Intel Core i7-13700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-14700f", price:"NO STOCK", consumo: "65", text: "Intel Core i7-14700F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },{ value: "i7-13700kf", price:"435.990", text: "Intel Core i7-13700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-14700k", price:"470.59", consumo: "65", text: "Intel Core i7-14700K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },{ value: "i7-13700kf", price:"435.990", text: "Intel Core i7-13700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-14700t", price:"NO STOCK", consumo: "35", text: "Intel Core i7-14700T", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },{ value: "i7-13700kf", price:"435.990", text: "Intel Core i7-13700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i7-14700kf", price:"437.59", consumo: "125", text: "Intel Core i7-14700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },{ value: "i7-13700kf", price:"435.990", text: "Intel Core i7-13700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-10850k", price:"NO STOCK", consumo: "125", text: "Intel Core i9-10850K", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-10900", price:"NO STOCK", consumo: "125", text: "Intel Core i9-10900", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-10900k", price:"NO STOCK", consumo: "125", text: "Intel Core i9-10900K", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] }},
        { value: "i9-10900kf", price:"NO STOCK", consumo: "125", text: "Intel Core i9-10900KF", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-10900t", price:"NO STOCK", consumo: "125", text: "Intel Core i9-10900T", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-10900xe", price:"NO STOCK", consumo: "125", text: "Intel Core i9-10900XE", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-11900", price:"NO STOCK", consumo: "125", text: "Intel Core i9-11900", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-11900k", price:"NO STOCK", consumo: "125", text: "Intel Core i9-11900K", socket: "LGA 1200", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-12900", price:"482.99", consumo: "65", text: "Intel Core i9-12900", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-12900f", price:"406.99", consumo: "65", text: "Intel Core i9-12900F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-12900k", price:"427.59", consumo: "125", text: "Intel Core i9-12900K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-12900t", price:"427.59", consumo: "35", text: "Intel Core i9-12900T", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-12900kf", price:"385.99", consumo: "125", text: "Intel Core i9-12900KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-12900ks", price:"427.99", consumo: "150", text: "Intel Core i9-12900KS", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-13900", price:"676.99", consumo: "65", text: "Intel Core i9-13900", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-13900f", price:"657.99", consumo: "65", text: "Intel Core i9-13900F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-13900k", price:"697.59", consumo: "125", text: "Intel Core i9-13900K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-13900t", price:"NO STOCK", consumo: "35", text: "Intel Core i9-13900T", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-13900kf", price:"NO STOCK", consumo: "125", text: "Intel Core i9-13900KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-13900ks", price:"NO STOCK", consumo: "150", text: "Intel Core i9-13900KS", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-14900", price:"808.99", consumo: "65", text: "Intel Core i9-14900", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-14900f", price:"678.99", consumo: "65", text: "Intel Core i9-14900F", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-14900t", price:"NO STOCK", consumo: "35", text: "Intel Core i9-14900T", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-14900k", price:"617.99", consumo: "125", text: "Intel Core i9-14900K", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-14900kf", price:"596.99", consumo: "125", text: "Intel Core i9-14900KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-14900ks", price:"NO STOCK", consumo: "125", text: "Intel Core i9-14900KS", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "i9-14700kf", price:"427.59", consumo: "125", text: "Intel Core i9-14700KF", socket: "LGA 1700", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } }
    ],
    amd: [
        { value: "ryzen3-1100", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 1100", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-1200", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 1200", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-1300x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 1300X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-2200g", price:"59.99", consumo: "125", text: "AMD Ryzen 3 2200G", socket: "AM4",  recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-2200ge", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 2200GE", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-2300x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 2300X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-3100", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 3100", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-3200g", price:"73.59", consumo: "125", text: "AMD Ryzen 3 3200G", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-3200ge", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 3200GE", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-3300x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 3300X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-4100", price:"87.59", consumo: "125", text: "AMD Ryzen 3 4100", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-5300g", price:"124.99", consumo: "125", text: "AMD Ryzen 3 5300G", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-5400g", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 5400G", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen3-5400ge", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 3 5400GE", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-1400", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 1400", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-1500x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 1500x", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-1600", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 1600", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-1600x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 1600X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-2400g", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 2400G", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-2400ge", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 2400GE", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-2500x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 2500X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-2600", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 2600", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-2600x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 2600X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-3400g", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 3400G", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-3400ge", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 3400GE", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-3500", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 3500", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-3500x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 3500X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-3600", price:"194.59", consumo: "125", text: "AMD Ryzen 5 3600", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-3600x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 3600X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-4500", price:"87.99", consumo: "125", text: "AMD Ryzen 5 4500", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-4600g", price:"120.99", consumo: "125", text: "AMD Ryzen 5 4600G", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-5500", price:"96.99", consumo: "125", text: "AMD Ryzen 5 5500", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-5600", price:"165.99", consumo: "125", text: "AMD Ryzen 5 5600", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-5600t", price:"155.99", consumo: "125", text: "AMD Ryzen 5 5600T", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-5600x", price:"158.59", consumo: "125", text: "AMD Ryzen 5 5600X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-5600g", price:"160", consumo: "125", text: "AMD Ryzen 5 5600G", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-5600gt", price:"163", consumo: "125", text: "AMD Ryzen 5 5600GT", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-5600ge", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 5600GE", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-5600xt", price:"210.59", consumo: "125", text: "AMD Ryzen 5 5600XT", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-7500f", price:"194.99", consumo: "125", text: "AMD Ryzen 5 7500F", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-7600", price:"244.99", consumo: "125", text: "AMD Ryzen 5 7600", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-7600x", price:"247.59", consumo: "125", text: "AMD Ryzen 5 7600X", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-7600f", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 7600F", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-7600gt", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 5 7600GT", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-8400f", price:"181.99", consumo: "125", text: "AMD Ryzen 5 8500F", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-8500g", price:"173.59", consumo: "125",  text: "AMD Ryzen 5 8500G", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-8600g", price:"224.59", consumo: "125",  text: "AMD Ryzen 5 8600G", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen5-9600x", price:"297.99", consumo: "125", text: "AMD Ryzen 5 9600X", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-1700", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 1700", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-1700x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 1700X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-1800x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 1800X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-2700", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 2700", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-2700x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 2700X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-3700x", price:"392.59", consumo: "125", text: "AMD Ryzen 7 3700X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-3800x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 3800X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-3800xt", price:"297.59", consumo: "125", text: "AMD Ryzen 7 3800XT", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5700", price:"166.99", consumo: "125", text: "AMD Ryzen 7 5700", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5700g", price:"185.99", consumo: "125", text: "AMD Ryzen 7 5700G", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5700ge", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 5700GE", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5700x", price:"196.99", consumo: "125", text: "AMD Ryzen 7 5700X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5700x3d", price:"316.59", consumo: "125", text: "AMD Ryzen 7 5700X3D", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5800", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 5800", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5800x", price:"236.99", consumo: "125", text: "AMD Ryzen 7 5800X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5800xt", price:"267.59", consumo: "125", text: "AMD Ryzen 7 5800XT", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-5800x3d", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 5800X3D", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-7700", price:"340.59", consumo: "125", text: "AMD Ryzen 7 7700", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-7700x", price:"371.99", consumo: "125", text: "AMD Ryzen 7 7700X", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-7700x3d", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 7 7700X3D", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-7800x3d", price:"563.99", consumo: "125", text: "AMD Ryzen 7 7800X3D", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-8700f", price:"271.59", consumo: "125", text: "AMD Ryzen 7 8700F", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-8700g", price:"336.59", consumo: "125", text: "AMD Ryzen 7 8700G", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-9700x", price:"414.59", consumo: "125", text: "AMD Ryzen 7 9700X", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen7-9800x3d", price:"625.59", consumo: "125", text: "AMD Ryzen 7 9800X3D", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-3900x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 9 3900X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-3950x", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 9 3950X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-3950xt", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 9 3950XT", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-5900", price:"NO STOCK", consumo: "125", text: "AMD Ryzen 9 5900", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-5950x", price:"530.99", consumo: "125", text: "AMD Ryzen 9 5950X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-5900x", price:"336.59", consumo: "125", text: "AMD Ryzen 9 5900X", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-5900xt", price:"409.59", consumo: "125", text: "AMD Ryzen 9 5900XT", socket: "AM4", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-7900", price:"455.79", consumo: "125", text: "AMD Ryzen 9 7900", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-7900x", price:"481.59", consumo: "125", text: "AMD Ryzen 9 7900X", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-7950x", price:"631", consumo: "125", text: "AMD Ryzen 9 7950X", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-7950x3d", price:"815", consumo: "125", text: "AMD Ryzen 9 7950X3D", socket: "AM5", recomendacion: 
            { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"],
             medium: ["rtx3060"], 
             high: ["rtx3080", "rtx3090"] 
            } },
        { value: "ryzen9-7900x3d", price:"753.99", consumo: "125", text: "AMD Ryzen 9 7900X3D", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-9900x", price:"531.59", consumo: "125", text: "AMD Ryzen 9 9900X", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } },
        { value: "ryzen9-9950x", price:"723.59", consumo: "125", text: "AMD Ryzen 9 9950X", socket: "AM5", recomendacion: { low: ["gtx1650", "gtx1660", "gtx1660super", "gtx1660ti", "gtx1060", "gtx1070", "gtx1070ti", "gtx1080", "gtx1080ti"], medium: ["rtx3060"], high: ["rtx3080", "rtx3090"] } }
    ]
};

const placasMadre = [
    { socket: "lga1200", modelo: "ASUS PRIME H510M-E", price: 85, ddr: "ddr4"},
    { socket: "lga1700", modelo: "MSI PRO B660M-A WIFI DDR4", price: 125, ddr: "ddr4"},
    { socket: "lga1700", modelo: "ASUS TUF GAMING B760M-PLUS WIFI II", price: 240, ddr: "ddr5" },
    { socket: "am4", modelo: "Gigabyte B450M DS3H", price: 70 },
    { socket: "am5", modelo: "ASUS ROG Strix X670E-E", price: 500 }
];

const gpus = {
    nvidia: [
        { value: "gtx1650", consumo: "125", text: "NVIDIA GTX 1650", price:"167" },
        { value: "gtx1660", consumo: "125", text: "NVIDIA GTX 1660", price:"185.99" },
        { value: "gtx1660super", consumo: "125", text: "NVIDIA GTX 1660 Super", price:"219.99" },
        { value: "gtx1660ti", consumo: "125", text: "NVIDIA GTX 1660 Ti" , price:"250" },
        { value: "gtx1060", consumo: "125", text: "NVIDIA GTX 1060P", price:"137.59" },
        { value: "gtx1070", consumo: "125", text: "NVIDIA GTX 1070", price:"178.99" },
        { value: "gtx1070ti", consumo: "125", text: "NVIDIA GTX 1070 Ti", price:"NO STOCK" },
        { value: "gtx1080", consumo: "125", text: "NVIDIA GTX 1080", price:"NO STOCK" },
        { value: "gtx1080ti", consumo: "125", text: "NVIDIA GTX 1080 Ti", price:"NO STOCK" },
        { value: "rtx2060", consumo: "125", text: "NVIDIA RTX 2060", price:"336.99" },
        { value: "rtx2060super", consumo: "125", text: "NVIDIA RTX 2060 Super", price:"295.99" },
        { value: "rtx2070", consumo: "125", text: "NVIDIA RTX 2070", price:"NO STOCK" },
        { value: "rtx2070super", consumo: "125", text: "NVIDIA RTX 2070 Super", price:"340.99" },
        { value: "rtx2070ti", consumo: "125", text: "NVIDIA RTX 2070 Ti", price:"NO STOCK" },
        { value: "rtx2080", consumo: "125", text: "NVIDIA RTX 2080", price:"NO STOCK" },
        { value: "rtx2080super", consumo: "125", text: "NVIDIA RTX 2080 Super", price:"NO STOCK" },
        { value: "rtx2080ti", consumo: "125", text: "NVIDIA RTX 2080 Ti", price:"NO STOCK" },
        { value: "rtx3050", consumo: "125", text: "NVIDIA RTX 3050", price:"182.59" },
        { value: "rtx3060", consumo: "170", text: "NVIDIA RTX 3060", price: "300.99" },
        { value: "rtx3060ti", consumo: "125", text: "NVIDIA RTX 3060 Ti", price: "389.99" },
        { value: "rtx3070", consumo: "125", text: "NVIDIA RTX 3070", price:"423.99" },
        { value: "rtx3070ti", consumo: "125", text: "NVIDIA RTX 3070 Ti", price:"NO STOCK" },
        { value: "rtx3080", consumo: "125", text: "NVIDIA RTX 3080", price:"NO STOCK" },
        { value: "rtx3080ti", consumo: "125", text: "NVIDIA RTX 3080 Ti", price:"NO STOCK" },
        { value: "rtx3090", consumo: "125", text: "NVIDIA RTX 3090", price:"NO STOCK" },
        { value: "rtx3090ti", consumo: "125", text: "NVIDIA RTX 3090 Ti", price:"NO STOCK" },
        { value: "rtx4060", consumo: "125", text: "NVIDIA RTX 4060", price:"369.99" },
        { value: "rtx4060ti", consumo: "125", text: "NVIDIA RTX 4060 Ti", price:"500" },
        { value: "rtx4070", consumo: "125", text: "NVIDIA RTX 4070", price:"680.59" },
        { value: "rtx4070super", consumo: "125", text: "NVIDIA RTX 4070 Super", price:"791.59" },
        { value: "rtx4070ti", consumo: "125", text: "NVIDIA RTX 4070 Ti", price:"NO STOCK" },
        { value: "rtx4070tis", consumo: "125", text: "NVIDIA RTX 4070 Ti Super", price:"946.99" },
        { value: "rtx4080", consumo: "325", text: "NVIDIA RTX 4080", price:"1420.99" },
        { value: "rtx4080super", consumo: "125", text: "NVIDIA RTX 4080 Super", price:"NO STOCK" },
        { value: "rtx4090", consumo: "450", text: "NVIDIA RTX 4090", price:"NO STOCK" },
        { value: "rtx5070", consumo: "125", text: "NVIDIA RTX 5070", price:"NO STOCK" },
        { value: "rtx5070ti", consumo: "125", text: "NVIDIA RTX 5070 Ti", price:"NO STOCK" },
        { value: "rtx5080", consumo: "125", text: "NVIDIA RTX 5080", price:"NO STOCK" },
        { value: "rtx5090", consumo: "125", text: "NVIDIA RTX 5090", price:"NO STOCK" }
    ],
    amd: [
        { value: "rx580", text: "AMD RX 580" ,price:"NO STOCK" },
        { value: "rx590", text: "AMD RX 590" ,price:"NO STOCK" },
        { value: "rx5500xt", text: "AMD RX 5500 XT" ,price:"NO STOCK" },
        { value: "rx5600xt", text: "AMD RX 5600 XT" ,price:"NO STOCK" },
        { value: "rx5700xt", text: "AMD RX 5700 XT" ,price:"NO STOCK" },
        { value: "rx6400", text: "AMD RX 6400" ,price:"173.99" },
        { value: "rx6600", text: "AMD RX 6500 XT" ,price:"201"},
        { value: "rx6600", text: "AMD RX 6600" ,price:"264" },
        { value: "rx6600xt", text: "AMD RX 6600 XT" ,price:"386.99" },
        { value: "rx6650", text: "AMD RX 6650 XT" ,price:"345.99" },
        { value: "rx6700", text: "AMD RX 6700" ,price:"NO STOCK" },
        { value: "rx6700xt", text: "AMD RX 6700 XT" ,price:"606" },
        { value: "rx6750xt", text: "AMD RX 6750 XT" ,price:"" },
        { value: "rx6800", text: "AMD RX 6800" ,price:"" },
        { value: "rx6800xt", text: "AMD RX 6800 XT" ,price:"806.99" },
        { value: "rx6900xt", text: "AMD RX 6900 XT" ,price:"1100" },
        { value: "rx6950xt", text: "AMD RX 6950 XT" ,price:"" },
        { value: "rx7600", text: "AMD RX 7600" ,price:"314" },
        { value: "rx7600xt", text: "AMD RX 7600 XT" ,price:"458.99" },
        { value: "rx7700xt", text: "AMD RX 7700 XT" ,price:"525" },
        { value: "rx7800xt", text: "AMD RX 7800 XT" ,price:"606" },
        { value: "rx7900xt", text: "AMD RX 7900 XT" ,price:"940" },
        { value: "rx7900xtx", text: "AMD RX 7900 XTX" ,price:"NO STOCK" }
    ]
};

const opcionesRam = [
    {value: "kingstonrngblack3200", consumo: "5", text: "Kingston Fury Renegade Black 1 x 8GB DDR4 3200Mhz", price: "22", ddr: "ddr4" },
    {value: "2kingstonrngblack3200", consumo: "5", text: "Kingston Fury Renegade Black 2 x 8GB DDR4 3200Mhz", price: "44", ddr: "ddr4" },
    {value: "kingstonrngwhite3200", consumo: "5", text: "Kingston Fury Renegade White 1 x 8GB DDR4 3200Mhz", price: "22.59", ddr: "ddr4" },
    {value: "2kingstonrngwhite3200", consumo: "5", text: "Kingston Fury Renegade White 2 x 8GB DDR4 3200Mhz", price: "45.18", ddr: "ddr4" },
    {value: "adataxpgspectrix3200", consumo: "5", text: "A-DATA XPG Spectrix D35G 1 x 8GB DDR4 3200Mhz", price: "23.59", ddr: "ddr4" },
    {value: "2adataxpgspectrix3200", consumo: "5", text: "A-DATA XPG Spectrix D35G 2 x 8GB DDR4 3200Mhz", price: "47.18", ddr: "ddr4" },
    {value: "kingstonrngrgb3200", consumo: "5", consumo: "5", text: "Kingston Fury Renegade White RGB 1 x 8GB DDR4 3200Mhz", price:"", ddr: "ddr4" },
    {value: "2kingstonrngrgb3200", consumo: "5", consumo: "5", text: "Kingston Fury Renegade White RGB 2 x 8GB DDR4 3200Mhz", price:"", ddr: "ddr4" },
    {value: "kingstonbeastblack3200", consumo: "5", text: "Kingston Fury Beast Black 1 x 8GB DDR4 3200Mhz", price:"24.59", ddr: "ddr4" },
    {value: "2kingstonbeastblack3200", consumo: "5", text: "Kingston Fury Beast Black 2 x 8GB DDR4 3200Mhz", price:"49.18", ddr: "ddr4" },
    {value: "kingstonbeastwhite3200", consumo: "5", text: "Kingston Fury Beast White 1 x 8GB DDR4 3200Mhz", price:"", ddr: "ddr4" },
    {value: "2kingstonbeastwhite3200", consumo: "5", text: "Kingston Fury Beast White 2 x 8GB DDR4 3200Mhz", price:"", ddr: "ddr4" },
    {value: "kingstonbeastblack3200rgb", consumo: "5", text: "Kingston Fury Beast Black RGB 1 x 8GB DDR4 3200Mhz", price:"23.59", ddr: "ddr4" },
    {value: "2kingstonbeastblack3200rgb", consumo: "5", text: "Kingston Fury Beast Black RGB 2 x 8GB DDR4 3200Mhz", price:"47.18", ddr: "ddr4" },
    {value: "kingstonbeastwhite3200rgb", consumo: "5", text: "Kingston Fury Beast White RGB 1 x 8GB DDR4 3200Mhz", price:"28", ddr: "ddr4" },
    {value: "2kingstonbeastwhite3200rgb", consumo: "5", text: "Kingston Fury Beast White RGB 2 x 8GB DDR4 3200Mhz", price:"28", ddr: "ddr4" },
    {value: "kingstonbeast3600", consumo: "5", text: "Kingston Fury Beast 1 x 8GB DDR4 3600Mhz", price:"", ddr: "ddr4" },
    {value: "2kingstonbeast3600", consumo: "5", text: "Kingston Fury Beast 2 x 8GB DDR4 3600Mhz", price:"", ddr: "ddr4" },
    {value: "adataxpgspectrix320016rgb", consumo: "5", text: "A-DATA XPG Spectrix D35G Black RGB 1 x 16GB DDR4 3200Mhz", price: "34", ddr: "ddr4" },
    {value: "2adataxpgspectrix320016rgb", consumo: "5", text: "A-DATA XPG Spectrix D35G Black RGB 2 x 16GB DDR4 3200Mhz", price: "68", ddr: "ddr4" },
    {value: "adataxpgspectrix320016rgbwhite", consumo: "5", text: "A-DATA XPG Spectrix D35G White RGB 1 x 16GB DDR4 3200Mhz", price: "34", ddr: "ddr4" },
    {value: "2adataxpgspectrix320016rgbwhite", consumo: "5", text: "A-DATA XPG Spectrix D35G White RGB 2 x 16GB DDR4 3200Mhz", price: "68", ddr: "ddr4" },
    {value: "corsairvengeance320016rgb", consumo: "5", text: "Corsair Vengeance RGB RS 1 x 16GB DDR4 3200Mhz", price: "38", ddr: "ddr4" },
    {value: "2corsairvengeance320016rgb", consumo: "5", text: "Corsair Vengeance RGB RS 2 x 16GB DDR4 3200Mhz", price: "74", ddr: "ddr4" },
    {value: "corsairvengeance360016rgb", consumo: "5", text: "Corsair Vengeance RGB RS 1 x 16GB DDR4 3600Mhz", price: "43.59", ddr: "ddr4" },
    {value: "2corsairvengeance360016rgb", consumo: "5", text: "Corsair Vengeance RGB RS 2 x 16GB DDR4 3600Mhz", price: "87.18", ddr: "ddr4" },
    {value: "kingstonfurybeastblack16gb", consumo: "5", text: "Kingston Fury Beast Black 1 x 16GB DDR4 3200Mhz", price: "41", ddr: "ddr4" },
    {value: "2kingstonfurybeastblack16gb", consumo: "5", text: "Kingston Fury Beast Black 2 x 16GB DDR4 3200Mhz", price: "82", ddr: "ddr4" },
    {value: "kingstonbeast5600", consumo: "5", text: "Kingston Fury Beast 1 x 8GB DDR5 5600Mhz", price:"37", ddr: "ddr5" },
    {value: "2kingstonbeast5600", consumo: "5", text: "Kingston Fury Beast 2 x 8GB DDR5 5600Mhz", price:"74", ddr: "ddr5" },
    {value: "kingstonbeast6000", consumo: "5", text: "Kingston Fury Beast 1 x 8GB DDR5 6000Mhz", price:"44", ddr: "ddr5" },
    {value: "2kingstonbeast6000", consumo: "5", text: "Kingston Fury Beast 2 x 8GB DDR5 6000Mhz", price:"88", ddr: "ddr5" },
    {value: "kingstonbeast5600rgb", consumo: "5", text: "Kingston Fury Beast RGB 1 x 8GB DDR5 5600Mhz", price:"45.99", ddr: "ddr5" },
    {value: "2kingstonbeast5600rgb", consumo: "5", text: "Kingston Fury Beast RGB 2 x 8GB DDR5 5600Mhz", price:"91.98", ddr: "ddr5" },
    {value: "adataxpg5600", consumo: "5", text: "A-DATA XPG Lancer Blade 1 x 16GB DDR5 5600Mhz", price:"51.59", ddr: "ddr5" },
    {value: "2adataxpg5600", consumo: "5", text: "A-DATA XPG Lancer Blade 2 x 16GB DDR5 5600Mhz", price:"103.18", ddr: "ddr5" },
    {value: "adataxpg6000rgb", consumo: "5", text: "A-DATA XPG Lancer Blade RGB 1 x 16GB DDR5 6000Mhz", price:"55.99", ddr: "ddr5" },
    {value: "2adataxpg6000rgb", consumo: "5", text: "A-DATA XPG Lancer Blade RGB 2 x 16GB DDR5 6000Mhz", price:"111.98", ddr: "ddr5" },
    {value: "adataxpg6400rgb", consumo: "5", text: "A-DATA XPG Lancer Blade RGB 1 x 16GB DDR5 6400Mhz", price:"84.59", ddr: "ddr5" },
    {value: "2adataxpg6400rgb", consumo: "5", text: "A-DATA XPG Lancer Blade RGB 2 x 16GB DDR5 6400Mhz", price:"169.18", ddr: "ddr5" },
]

const opcionesStorage = [
    {value: "hdd1", consumo: "7", text: "HDD SATA 3 Seagate Barracuda Green 2 TB", price:"68.99"},
    {value: "hdd2", consumo: "7", text: "HDD SATA 3 Western Digital Blue 2 TB", price:"73.99"},
    {value: "hdd3", consumo: "7", text: "HDD SATA 3 Toshiba N300 NAS 4 TB", price:"122.99"},
    {value: "hdd4", consumo: "7", text: "HDD SATA 3 Toshiba X300 Performance 4 TB", price:"126.59"},
    {value: "hdd5", consumo: "7", text: "HDD SATA 3 Western Digital Red Pro 4 TB", price:"134.99"},
    {value: "ssd1", consumo: "3", text: "SSD SATA 3 Hikvision E100 512 GB", price:"37.59"},
    {value: "ssd2", consumo: "3", text: "SSD SATA 3 Hikvision V300 512 GB", price:"44.99"},
    {value: "ssd3", consumo: "3", text: "SSD SATA 3 Western Digital Green 1 TB", price:"57"},
    {value: "ssd4", consumo: "3", text: "SSD SATA 3 Hikvision E100 1 TB", price:"57.79"},
    {value: "ssd5", consumo: "3", text: "SSD SATA 3 Crucial BX500 1 TB", price:"59.59"},
    {value: "ssd6", consumo: "3", text: "SSD SATA 3 KingSpec P3 1 TB", price:"61.59"},
    {value: "m.2-1", consumo: "5", text: "M.2 SATA 3 Hikvision E100N 512 GB", price:"34.59"},
    {value: "m.2-2", consumo: "5", text: "M.2 SATA 3 Western Digital Blue SA510 1 TB", price:"86.59"},
    {value: "m.2-3", consumo: "5", text: "M.2 PCIe 3.0 x4 Hikvision E300 512 GB", price:"34.59"},
    {value: "m.2-4", consumo: "5", text: "M.2 PCIe 3.0 x4 A-DATA Legend 710 512 GB", price:"36.99"},
    {value: "m.2-5", consumo: "5", text: "M.2 PCIe 3.0 x4 KingSpec 512 GB", price:"38.99"},
    {value: "m.2-6", consumo: "5", text: "M.2 PCIe 4.0 x4 Kingston NV3 1 TB", price:"54.99"},
    {value: "m.2-7", consumo: "5", text: "M.2 PCIe 3.0 x4 A-DATA Legend 710 1 TB", price:"59.99"},
    {value: "m.2-8", consumo: "5", text: "M.2 PCIe 4.0 x4 Kingston NV2 1 TB", price:"60.59"},
    {value: "m.2-9", consumo: "5", text: "M.2 PCIe 3.0 x4 Crucial P3 1 TB", price:"60.99"},
    {value: "m.2-10", consumo: "5", text: "M.2 PCIe 3.0 x4 Gigabyte Gen3 2500E 1 TB", price:"68.99"},
    {value: "m.2-11", consumo: "5", text: "M.2 PCIe 4.0 x4 Western Digital Black SN770 1 TB", price:"80.59"},
    {value: "m.2-12", consumo: "5", text: "M.2 PCIe 4.0 x4 A-DATA XPG Gammix S70 BLADE 1 TB", price:"94.99"},
    {value: "m.2-13", consumo: "5", text: "M.2 PCIe 3.0 x4 A-DATA Legend 700 2 TB", price:"120.59"},
    {value: "m.2-14", consumo: "5", text: "M.2 PCIe 3.0 x4 KingSpec 2 TB", price:"152.99"},
    {value: "m.2-15", consumo: "5", text: "M.2 PCIe 4.0 x4 Kingston NV2 2 TB", price:"118.99"},
    {value: "m.2-16", consumo: "5", text: "M.2 PCIe 4.0 x4 Western Digital Black SN770 2 TB", price:"143"},
    {value: "m.2-17", consumo: "5", text: "M.2 PCIe 5.0 x4 Gigabyte Aorus Gen5 12000 1 TB", price:"203.99"},
    {value: "m.2-18", consumo: "5", text: "M.2 PCIe 5.0 x4 Corsair MP700 PRO 1 TB", price:"231.59"},
    {value: "m.2-19", consumo: "5", text: "M.2 PCIe 5.0 x4 Crucial T700 1 TB", price:"235.59"},
    {value: "m.2-20", consumo: "5", text: "M.2 PCIe 5.0 x4 Gigabyte Aorus Gen5 12000 2 TB", price:"343.59"},
    {value: "m.2-21", consumo: "5", text: "M.2 PCIe 5.0 x4 MSI Spatium M570 Pro 2 TB", price:"347.99"},
    {value: "m.2-22", consumo: "5", text: "M.2 PCIe 5.0 x4 Crucial T700 2 TB", price:"359.59"},
]

const fuentes = {
    noModular: [
        {value: "cougar-stc", text: "Cougar STC 500W 80PLUS - Estandar ATX", price: "45.99", watts: "500" },
        {value: "corsair-cx550w", text: "Corsair CX Series 550W 80PLUS Bronze - ATX", price: "46.59", watts: "550" },
        {value: "msi-mag", text: "MSI MAG A600DN 600W 80PLUS Bronze - Estandar ATX", price: "47.59", watts: "600" },
        {value: "thermaltake-smart", text: "Thermaltake Smart SPD-0500P 500W 80PLUS - ATX", price: "48.99", watts: "500" },
        {value: "cougar-atlas", text: "Cougar ATLAS 550W 80PLUS Bronze - Estandar ATX", price: "51.99", watts: "550" },
        {value: "xpg-pylon", text: "XPG PYLON 650 W 80PLUS Bronze Estandar - ATX", price: "64.99", watts: "650" },
        {value: "deepcool-pk500d", text: "Deepcool PK500D 500W 80PLUS Bronze - ATX", price: "68.59", watts: "500" },
        {value: "coolermaster-mwe600", text: "Cooler Master MWE Bronce V3 600W 80PLUS Bronze - Estandar ATX", price: "74", watts: "650" },
        {value: "coolermaster-mwe650", text: "Cooler Master MWE Bronce V3 650W 80PLUS Bronze - Estandar ATX", price: "74.99", watts: "650" },
        {value: "coolermaster-mwe750", text: "Cooler Master MWE Bronce V3 750W 80PLUS Bronze - Estandar ATX", price: "78.59", watts: "750" },
        {value: "xpg-kyber", text: "XPG KYBER 850W 80PLUS Gold - Estandar ATX", price: "110", watts: "850" },
    ],
    modular: [
        {value: "thermalright-tr-tg650", text: "Thermalright TR-TG650-BL 650W 80PLUS Gold Estandar ATX", price: "84", watts: "650" },
        {value: "corsair-rm850", text: "Corsair RM Series RM850 850W 80PLUS Gold - Estandar ATX", price: "126.59", watts: "850" },
    ]
}

const gabinetes = {
    oficina: [
        { value: "aonelite", text: "AON Elite 150 (AO-CA-1000)", price: "36" },
    ] ,
    gamer: [
        { value: "centaurus-shai", text: "Centaurus Shai - Ventiladores incluidos 3 x 120 mm Micro ATX", price: "42" },
        { value: "centaurus-owl", text: "Centaurus Owl - Black - Ventiladores incluidos 3 x 120 mm Micro ATX", price: "45" },
        { value: "cougar-purity-rgb", text: "Cougar Purity RGB - White - Ventiladores incluidos 1 x 120 mm Micro ATX", price: "49" },
        { value: "cougar-mg140-rgb", text: "Cougar MG140 RGB - Iron-Gray - Ventiladores incluidos 3 x 120 mm Micro ATX", price: "60" },
        { value: "airflow-mirage-black", text: "Airflow Mirage - Black - Ventiladores incluidos 3 x 120 mm Micro ATX", price: "63" },
    ],
    personalizado: [
        { value: "perzonalizado-itx", text: "Gabinete Personalizado Mini ITX", price: "150" },
        { value: "perzonalizadom-icro", text: "Gabinete Personalizado Micro ATX", price: "200" },
        { value: "perzonalizado-atx", text: "Gabinete Personalizado ATX", price: "250" },        
    ]
};


function cargarProcesadores() {
    const marca = document.getElementById('marca-procesador').value;
    const selectProcesador = document.getElementById('procesador');
    

    selectProcesador.innerHTML = '<option value="">--Elige un procesador--</option>';

    if (marca) {

        selectProcesador.disabled = false;


        cpus[marca].forEach(cpu => {
            const option = document.createElement('option');
            option.value = cpu.value;
            option.text = `${cpu.text} - ${cpu.price} USD`;
            selectProcesador.add(option);
        });
    } else {
        selectProcesador.disabled = true;
    }

    document.getElementById('socket').innerText = "No seleccionado";
    
}

function cargarGPUs() {
    const marca = document.getElementById('marca-gpu').value;
    const selectGPU = document.getElementById('gpu');

    selectGPU.innerHTML = '<option value="">--Elige una tarjeta gráfica--</option>';

    if (marca) {

        selectGPU.disabled = false;

        gpus[marca].forEach(gpu => {
            const option = document.createElement('option');
            option.value = gpu.value;
            option.text = `${gpu.text} - ${gpu.price} USD`;
            selectGPU.add(option);
        });
    } else {
        selectGPU.disabled = true;
    }

    document.getElementById('recomendacion-gpu').innerText = "";
}

function cargarRam(selectId, datos) {
    const select = document.getElementById(selectId);


    if (select) {

        select.innerHTML = '';

        datos.forEach(ram => {
            const option = document.createElement('option');
            option.value = ram.value;
            option.text = `${ram.text} - ${ram.price} USD`;
            select.appendChild(option);
        });
    }
}

function cargarRam2(selectId, datos) {
    const select = document.getElementById(selectId);

    if (select) {

        select.innerHTML = '';

        datos.forEach(ram2 => {
            const option = document.createElement('option');
            option.value = ram2.value;
            option.text = `${ram2.text} - ${ram2.price} USD`;
            select.appendChild(option);
        });
    }
}

function cargarStorage(selectId, datos) {
    const select = document.getElementById(selectId);

    if (select) {

        select.innerHTML = '';

        datos.forEach(storage => {
            const option = document.createElement('option');
            option.value = storage.value;
            option.text = `${storage.text} - ${storage.price} USD`;
            select.appendChild(option);
        });
    }
}

function cargarStorage2(selectId, datos) {
    const select = document.getElementById(selectId);

    if (select) {

        select.innerHTML = '';

        datos.forEach(storage => {
            const option = document.createElement('option');
            option.value = storage.value;
            option.text = `${storage.text} - ${storage.price} USD`;
            select.appendChild(option);
        });
    }
}

function cargarFuentes() {
    const tipo = document.getElementById('tipo-fuente').value;
    const selectFuente = document.getElementById('fuente');

    selectFuente.innerHTML = '<option value="">--Elige la Fuente de Poder--</option>';

    if (tipo) {

        selectFuente.disabled = false;

        fuentes[tipo].forEach(fuentes => {
            const option = document.createElement('option');
            option.value = fuentes.value;
            option.text = `${fuentes.text} - ${fuentes.price} USD`;
            selectFuente.add(option);
        });
    } else {
        selectFuente.disabled = true;
    }

    document.getElementById('recomendacion-fuente').innerText = "";
}

function cargarGabinetes() {
    const tipo = document.getElementById('tipo-gabinete').value;
    const selectGabinete = document.getElementById('gabinete');

    selectGabinete.innerHTML = '<option value="">--Elige el Gabinete--</option>';

    if (tipo) {

        selectGabinete.disabled = false;

        gabinetes[tipo].forEach(gabinetes => {
            const option = document.createElement('option');
            option.value = gabinetes.value;
            option.text = `${gabinetes.text} - ${gabinetes.price} USD`;
            selectGabinete.add(option);
        });
    } else {
        selectGabinete.disabled = true;
    }
}

function actualizarSocketYRecomendaciones() {
    const procesadorSeleccionado = document.getElementById('procesador').value;
    const marca = document.getElementById('marca-procesador').value;

    if (!procesadorSeleccionado) {
        document.getElementById('socket').innerText = "No seleccionado";
        actualizarRecomendaciones();
        return;
    }

    const procesador = cpus[marca].find(p => p.value === procesadorSeleccionado);
    if (procesador) {
        document.getElementById('socket').innerText = procesador.socket;
    } else {
        document.getElementById('socket').innerText = "No seleccionado";
    }

    actualizarRecomendaciones();
}

function recomendacionFuente() {
    const cpuSeleccionada = document.getElementById('procesador').value;
    const marcaCPU = document.getElementById('marca-procesador').value;
    const gpuSelecionada = document.getElementById('gpu').value;
    const marcaGPU = document.getElementById('marca-gpu').value;
    const ramSeleccionada = document.getElementById('ram').value;
    const ramSeleccionada2 = document.getElementById('ram2').value;
    const discoSeleccionado = document.getElementById('almacenamiento').value;
    const discoSeleccionado2 = document.getElementById('almacenamiento2').value;
    const fuenteSeleccionada = document.getElementById('fuente').value;

    const cpu = cpus[marcaCPU].find(p => p.value === cpuSeleccionada);
    const gpu = gpus[marcaGPU].find(p => p.value === gpuSelecionada);
    const ram = opcionesRam.find(r => r.value === ramSeleccionada);
    const ram2 = opcionesRam.find(ra => ra.value === ramSeleccionada2)
    const almacenamiento = opcionesStorage.find(d => d.value === discoSeleccionado);
    const almacenamiento2 = opcionesStorage.find(a => a.value === discoSeleccionado2);

    const fuenteNoModular = fuentes.noModular.find(f => f.value === fuenteSeleccionada);
    const fuenteModular = fuentes.modular.find(f => f.value === fuenteSeleccionada);
    const fuente = fuenteNoModular || fuenteModular;

    const consumoTotal = cpu.consumo + gpu.consumo + ram.consumo + almacenamiento.consumo + ram2.consumo + almacenamiento2.consumo;

    const recomendacionFuente = document.getElementById('recomendacion-fuente');

    if (fuente.watts < consumoTotal) {
        recomendacionFuente.innerText = "Fuente no recomendada, los componentes requerirán una fuente con mayor Watts.";
        recomendacionFuente.className = "recomendacion-fuente high";
    } else if (fuente.watts > consumoTotal + 100) {
        recomendacionFuente.innerText = "Fuente con demasiados Watts para los componentes, recomendamos utilizar una con menor Watts para menor gasto.";
        recomendacionFuente.className = "recomendacion-fuente low";
    } else {
        recomendacionFuente.innerText = "Fuente acorde a los componentes.";
        recomendacionFuente.className = "recomendacion-fuente medium";
    }
}

function actualizarRecomendaciones() {
    const procesadorSeleccionado = document.getElementById('procesador').value;
    const marcaProcesador = document.getElementById('marca-procesador').value;
    const gpuSeleccionada = document.getElementById('gpu').value;

    if (procesadorSeleccionado && marcaProcesador) {
        const procesador = cpus[marcaProcesador].find(p => p.value === procesadorSeleccionado);

        if (gpuSeleccionada) {
            const recomendacionGpu = document.getElementById('recomendacion-gpu');
            if (procesador.recomendacion.low.includes(gpuSeleccionada)) {
                recomendacionGpu.innerText = "GPU recomendada para bajo costo.";
                recomendacionGpu.className = "recomendacion-gpu low";
            } else if (procesador.recomendacion.medium.includes(gpuSeleccionada)) {
                recomendacionGpu.innerText = "GPU recomendada para medio costo.";
                recomendacionGpu.className = "recomendacion-gpu medium";
            } else if (procesador.recomendacion.high.includes(gpuSeleccionada)) {
                recomendacionGpu.innerText = "GPU recomendada para alto costo y para largo plazo.";
                recomendacionGpu.className = "recomendacion-gpu high";
            } else {
                recomendacionGpu.innerText = "GPU no recomendada para este procesador.";
                recomendacionGpu.className = "recomendacion-gpu";
            }
        }
    }
}


const tipoCambioUSDCLP = 950;

function convertirYFormatearCLP(precioUSD) {
    const precioCLP = precioUSD * tipoCambioUSDCLP;
    return `${precioCLP.toLocaleString('es-CL')}`;
}


function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let yPosition = 10;
    const marginLeft = 10;
    const column1 = marginLeft;
    const column2 = 140;
    const column3 = 200;
    const maxWidth = 100;

    function splitTextIntoLines(text, maxWidth) {
        const words = text.split(' ');
        let lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = doc.getStringUnitWidth(currentLine + ' ' + word) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            if (width < maxWidth) {
                currentLine += ' ' + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    const cpuSeleccionado = document.getElementById('procesador').value;
    const marcaCPU = document.getElementById('marca-procesador').value;
    const marcaGPU = document.getElementById('marca-gpu').value;
    const gpuSeleccionado = document.getElementById('gpu').value;
    const fuenteSeleccionado = document.getElementById('fuente').value;
    const tipoFuente = document.getElementById('tipo-fuente').value;
    const gabineteSelecionado = document.getElementById('gabinete').value;
    const tipoGabinete = document.getElementById('tipo-gabinete').value;

    const socketSpan = document.getElementById('socket');
    const socketValue = socketSpan.innerText.trim().toLowerCase().replace(/\s+/g, '');

    const procesador = cpus[marcaCPU].find(p => p.value === cpuSeleccionado);
    const gpu = gpus[marcaGPU].find(gpu => gpu.value === gpuSeleccionado);
    const ram = opcionesRam.find(ram => ram.value === document.getElementById('ram').value);
    const ram2 = opcionesRam.find(ram2 => ram2.value === document.getElementById('ram2').value);
    const storage = opcionesStorage.find(storage => storage.value === document.getElementById('almacenamiento').value);
    const storage2 = opcionesStorage.find(storage => storage.value === document.getElementById('almacenamiento2').value);
    const fuente = fuentes[tipoFuente].find(fuente => fuente.value === fuenteSeleccionado);
    const gabinete = gabinetes[tipoGabinete].find(g => g.value === gabineteSelecionado);

    const tipoDDR = ram.ddr;
    const tipoDDRr2 = ram2.ddr;
    const placaMadre = placasMadre.find(placa => placa.socket === socketValue && (placa.ddr === tipoDDR || placa.ddr === tipoDDRr2));

    const precioCPU = Number(procesador.price);
    const precioPlaca = Number(placaMadre.price);
    const precioGPU = Number(gpu.price);
    const precioRAM = Number(ram.price);
    const precioRAM2 = Number(ram2.price);
    const precioStorage = Number(storage.price);
    const precioStorage2 = Number(storage2.price);
    const precioFuente = Number(fuente.price);
    const precioGabinete = Number(gabinete.price);

    const precioTotalUSD = precioCPU + precioPlaca + precioGPU + precioRAM + precioRAM2 + precioStorage + precioStorage2 + precioFuente + precioGabinete;
    const precioTotalCLP = convertirYFormatearCLP(precioTotalUSD);

    const precioCPUFormateado = convertirYFormatearCLP(precioCPU);
    const precioPlacaFormateado = convertirYFormatearCLP(precioPlaca);
    const precioGPUFormateado = convertirYFormatearCLP(precioGPU);
    const precioRAMFormateado = convertirYFormatearCLP(precioRAM);
    const precioRAM2Formateado = convertirYFormatearCLP(precioRAM2);
    const precioStorageFormateado = convertirYFormatearCLP(precioStorage);
    const precioStorage2Formateado = convertirYFormatearCLP(precioStorage2);
    const precioFuenteFormateado = convertirYFormatearCLP(precioFuente);
    const precioGabineteFormateado = convertirYFormatearCLP(precioGabinete);

    doc.setFontSize(18);
    doc.text('Cotización Geek PC:', marginLeft, yPosition);
    yPosition += 20;

    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Componente', column1, yPosition);
    doc.text('Precio USD', column2, yPosition, { align: 'right' }); 
    doc.text('Precio CLP', column3, yPosition, { align: 'right' }); 
    yPosition += 10;

    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPosition, 200, yPosition);
    yPosition += 10;

    doc.setFont(undefined, 'normal');
    const components = [
        { name: 'Procesador', text: procesador.text, precioUSD: precioCPU, precioCLP: precioCPUFormateado },
        { name: 'Placa madre', text: placaMadre.modelo, precioUSD: precioPlaca, precioCLP: precioPlacaFormateado },
        { name: 'GPU', text: gpu.text, precioUSD: precioGPU, precioCLP: precioGPUFormateado },
        { name: 'RAM', text: ram.text, precioUSD: precioRAM, precioCLP: precioRAMFormateado },
        { name: 'RAM', text: ram2.text, precioUSD: precioRAM2, precioCLP: precioRAM2Formateado },
        { name: 'Almacenamiento', text: storage.text, precioUSD: precioStorage, precioCLP: precioStorageFormateado },
        { name: 'Almacenamiento', text: storage2.text, precioUSD: precioStorage2, precioCLP: precioStorage2Formateado },
        { name: 'Fuente', text: fuente.text, precioUSD: precioFuente, precioCLP: precioFuenteFormateado },
        { name: 'Gabinete', text: gabinete.text, precioUSD: precioGabinete, precioCLP: precioGabineteFormateado },
    ];

    components.forEach(component => {
        const textLines = splitTextIntoLines(`${component.name}: ${component.text}`, maxWidth);
        textLines.forEach((line, index) => {
            doc.text(line, column1, yPosition + (index * 10));
        });
        doc.text(`$${component.precioUSD} USD`, column2, yPosition, { align: 'right' });
        doc.text(`$${component.precioCLP} CLP`, column3, yPosition, { align: 'right' });
        yPosition += (textLines.length * 10);
    });

    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPosition, 200, yPosition);
    yPosition += 10;

    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(`Precio total:`, column1, yPosition);
    doc.text(`$${precioTotalUSD} USD`, column2, yPosition, { align: 'right' });
    doc.text(`$${precioTotalCLP} CLP`, column3, yPosition, { align: 'right' });
    yPosition += 10;

    doc.save('Cotizacion_Geek_PC.pdf');
}

document.addEventListener('DOMContentLoaded', function () {
    cargarProcesadores('procesador', cpus);
    cargarGPUs('gpu', gpus);
    cargarRam('ram', opcionesRam);
    cargarRam2('ram2', opcionesRam);
    cargarStorage('almacenamiento', opcionesStorage);
    cargarStorage2('almacenamiento2', opcionesStorage);
    cargarFuentes('fuente', fuentes);
    cargarGabinetes('gabinete', gabinetes);


    document.getElementById('imprimir').addEventListener('click', generarPDF);
});

 const preguntas = document.querySelectorAll('.preguntas');

 preguntas.forEach((pregunta) => {
     pregunta.addEventListener('click', () => {
         preguntas.forEach((otraPregunta) => {
             if (otraPregunta !== pregunta && otraPregunta.classList.contains('abierto')) {
                 otraPregunta.classList.remove('abierto');
             }
         });
         pregunta.classList.toggle('abierto');
     });
 });