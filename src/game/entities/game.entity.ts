import { Genre } from "src/genre/entities/genre.entity"
import { Profile } from "src/profile/entities/profile.entity"



export class Game {
    id?: number
    title: string
    imagemUrl?: string
    description: string
    year: number
    imdbScore: number
    ytTrailerLink: string
    gameplayLink: string
    profiles?: Profile[];
    genres?: Genre[];
}
