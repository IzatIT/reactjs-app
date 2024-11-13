import {
    type ISourceOptions,
    MoveDirection,
    OutMode
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

type Props = {
    color?: string;
}

export const COLORS = {
    PRIMARY_BG: "linear-gradient(65.5deg, rgb(4, 91, 126) -15.1%, rgb(23, 25, 95) 71.5%)",
    // PRIMARY_BG: lightBlue[900],
    SECONDARY_BG: "linear-gradient(109.6deg, rgb(0, 37, 84) 100.2%, rgba(0, 37, 84, 0.32) 11.2%)",
    PRIMARY_COLOR: "#FFFFFF",
    TRIOTERY_COLOR: "#C6C6C6",
    SECONDARY_COLOR: "rgba(28,28,80, 0.96)",
}

export const AuthParticles = ({ color = COLORS.PRIMARY_COLOR }: Props) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: COLORS.PRIMARY_BG,
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 0.4
                        }
                    },

                    repulse: {
                        distance: 150,
                        duration: 10,
                    },
                },
            },
            particles: {
                color: {
                    value: color,
                },
                links: {
                    color: color,
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 250,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",

                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return <Particles id="tsparticles" options={options}/>
    }

    return <></>;
};