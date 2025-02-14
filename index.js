const { animate, scroll } = Motion

    animate(
        ".box",
        { rotate: 90 },
        { type: "spring", repeat: 1, repeatDelay: 0.3 }
    )