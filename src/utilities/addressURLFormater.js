const formatAddressForURL = address => {
    console.log(address)
    const streetAddress = address.line.replace(/ /g, '+');
    const city = address.city.replace(/ /g, '+')
    const state = address.state.replace(/ /g, '+')
    return `${streetAddress}%20${city}%20${state}`
}

export default formatAddressForURL;
