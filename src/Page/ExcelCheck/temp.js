import React from 'react';

export default function temp() {
	return (
		<div>
       				<div>
					<div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
						<div>
							<h3 class="text-lg leading-6 font-medium text-gray-900">Upload File</h3>
							<p class="mt-1 max-w-2xl text-sm text-gray-500"></p>
						</div>
					</div>

					<div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
				

						<div
							class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
						>
							<label for="cover_photo" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
								Template File
							</label>
							<div class="mt-2 sm:mt-0 sm:col-span-2">
								<div
									class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
								>
									<div class="space-y-1 text-center">
										<svg
											class="mx-auto h-16 w-16 text-gray-400"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 30 30"
											aria-hidden="true"
										>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
										</svg>
										<div class="flex text-sm text-gray-600">
											<label
												for="file-upload"
												class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
											>
												<span>Upload a file</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													class="sr-only"
												/>
											</label>
											<p class="pl-1">or drag and drop</p>
										</div>
										<p class="text-xs text-gray-500">.xlsx upto 1MB</p>
									</div>
								</div>
							</div>
            </div>
            
					</div>
				</div>
		</div>
	);
}
