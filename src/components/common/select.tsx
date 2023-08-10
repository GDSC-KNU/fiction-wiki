function Select({ register, options, label }: any) {
  return (
    <div className="mb-2">
      <label
        htmlFor="select-box"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="select-box"
        {...register}
        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
