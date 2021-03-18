const formatAddressForURL = address => {
    const streetAddress = address.line.replace(/ /g, '+');
    const city = address.city.replace(/ /g, '+')
    const state = address.state.replace(/ /g, '+')
    return `https://www.google.com/maps/search/?api=1&query=${streetAddress}%20${city}%20${state}`
}

export default formatAddressForURL;
