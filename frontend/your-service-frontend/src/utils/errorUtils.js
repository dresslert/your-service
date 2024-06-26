
export function formatErrorMessages(errorDetails) {
    if (typeof errorDetails === 'object' && errorDetails !== null) {
      return Object.entries(errorDetails).map(([field, messages]) => {
        return `${field}: ${messages.join(', ')}`;
      }).join(' ');
    }
    return 'Erro desconhecido. Por favor, tente novamente.';
  }
  