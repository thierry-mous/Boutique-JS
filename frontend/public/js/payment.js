const token = "7be2d938-6a5c-4f03-85ea-c0ca54093566"

async function fetchProfile(token) {
    const bodyData = {
        card: {
            number:"2525252525252524",
            expiration_date:"12/28",
            cvc:"123",
        },
        payment_intent: {
            price:"10,99",
        },
    };
    const result = await fetch("http://challenge-js.ynovaix.com/payment", {
        method: "POST",
        headers: {
           Authorization: token,
              "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
    });
    if (!result.ok) {
     const errorResponse = await result.json();
        throw new Error(errorResponse.message);
    }
    return await result.json();
}

