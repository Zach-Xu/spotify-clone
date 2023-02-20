export const artistsToString = (artists: SpotifyApi.ArtistObjectSimplified[] | undefined): string => {
    if (!artists) {
        return ''
    }
    return artists.map(artist => artist.name).join(',')
}

export const millisToMinutesAndSeconds = (mills: number | undefined): string => {
    if (!mills) {
        return '0:00'
    }
    let minutes = Math.floor(mills / 60000)
    let seconds = ((mills % 60000) / 1000).toFixed(0)
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`
}

export const isTokenExipred = (isoDateString: string): boolean => {
    const isoDate = new Date(isoDateString)
    // get the current time in milliseconds
    const now = new Date().getTime()

    // compare the ISO 8601 date with the current time
    if (now > isoDate.getTime()) {
        return true
    }
    return false
}

// return the daytime of current date
export const getDaytime = (): string => {
    const now = new Date()
    const hours = now.getHours()
    if (hours >= 6 && hours <= 12) {
        return 'morning'
    }
    if (hours > 12 && hours < 18) {
        return 'afternoon'
    }
    return 'evening'
}