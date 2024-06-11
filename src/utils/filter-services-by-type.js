export default function filterServicesByType(type, services) {
  return services.filter((service) => service.typeService.id === type);
}
