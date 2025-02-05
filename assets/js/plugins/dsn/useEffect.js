export function killAjax(effect) {
    if (typeof effect === 'function')
        $dsnEffect.kill.push(effect);
}