interface Config{
    url: string
}

declare module "hj" {
    function init(config:Config):true
}