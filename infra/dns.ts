const domainName: string = "davedennis.dev";

export const domain =
  {
    production: domainName,
    dev: `dev.${domainName}`,
  }[$app.stage] || $app.stage + ".dev.davedennis.dev";

  export const zone = aws.route53.getZone({
    name: domainName,
  });
  
  export const outputs = {
    zone: zone.then((zone) => zone.zoneId),
  };