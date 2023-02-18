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